<template>
    <div>
        <div id="tableBoard">
            <table class="table is-hoverable is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name Awards</th>
                        <th>Point</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(award, index) in awards" v-bind:key = "index">
                        <th>{{award.id}}</th>
                        
                        <td v-if="award.id !== editId">{{award.name}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.name"></b-input></td>

                        <td v-if="award.id !== editId">{{award.point}}</td>
                        <td v-else><b-input size="is-small" placeholder="Point" v-model="form.point"></b-input></td>

                        <td v-if="award.id !== editId">{{award.stock}}</td>
                        <td v-else><b-input size="is-small" placeholder="Stock Number" v-model="form.stock"></b-input></td>

                        <td v-if="award.id !== editId">
                            <div v-if="award.status" class="tag is-success">ON</div>
                            <div v-else class="tag is-danger">OFF</div>
                        </td>
                        <td v-else>
                            <b-select placeholder="Status" v-model="form.status">
                                <option value=true>ON</option>
                                <option value=false>OFF</option>
                            </b-select>
                        </td>
                        <td v-if="award.id !== editId && award.id !== deleteId">
                            <b-button @click="openForm(award)" size="is-small" type="is-primary" outlined>Edit</b-button>&nbsp;
                            <b-button @click="openDelete(award)" size="is-small" type="is-danger" outlined>Delete</b-button>
                        </td>
                        <td v-else-if="award.id === editId" id="EditButtonGroup">
                            <b-button @click="editAward()" size="is-small" type="is-warning">Confirm</b-button>&nbsp;
                            <b-button @click="closeForm()" size="is-small" type="is-warning">close</b-button>
                        </td>
                        <td v-else id="DeleteButtonGroup">
                            <b-button @click="deleteAward(award)" size="is-small" type="is-danger">Confirm</b-button>&nbsp;
                            <b-button @click="closeForm()" size="is-small" type="is-warning">close</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import RewardApiStore from "@/store/AwardApi"
export default {
    data(){
        return{
            awards: [],
            editId: -1,
            deleteId: -1,
            form: {
                name: "",
                point: 0,
                stock: 0,
                status: true
            }
        }
    },
    created(){
        this.fetchAwards()
    },
    methods: {
        async fetchAwards() {
            await RewardApiStore.dispatch('fetchAwards')
            this.awards = RewardApiStore.getters.awards
        },
        openForm(award){
            this.editId = award.id
            let cloned = JSON.parse(JSON.stringify(award))
            this.form.name = cloned.name
            this.form.point = cloned.point
            this.form.stock = cloned.stock
            this.form.status = cloned.status
        },
        openDelete(award){
            this.deleteId = award.id
        },
        closeForm(){
            this.editId = -1
            this.deleteId = -1
            this.form= {
                id: "",
                name: "",
                point: 0,
                stock: 0,
                status: true
            }
        },
        async editAward(){
            let payload={
                id: this.editId,
                name: this.form.name.trim(),
                point: parseInt(this.form.point),
                stock: parseInt(this.form.stock),
                status: this.form.status
            }
            await RewardApiStore.dispatch("editAward",payload)
            this.closeForm()
            this.fetchAwards()
        },
        async deleteAward(award){
            let payload={
                id: award.id
            }
            let res = await RewardApiStore.dispatch("deleteAward",payload)
            if(res.success){
                console.log("Delete Success");
                this.$swal("Delete Award Success", award.name, "success")
            }else{
                this.$swal("Delete Award Failed", award.name, "error")
            }
            this.fetchAwards()
        }
    }
}
</script>

<style scoped lang="scss">
#tableBoard{
    .table{
        width: 75%;
        text-align: center;
        padding-top: 2em;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>