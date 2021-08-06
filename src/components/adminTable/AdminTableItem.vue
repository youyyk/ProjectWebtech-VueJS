<template>
    <div>
        <div id="tableBoard">
            <table class="table is-hoverable is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Name Item</th>
                        <th>Price</th>
                        <th>Explain</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" v-bind:key = "index">
                        <th>{{item.id}}</th>

                        <td v-if="item.id !== editId">{{item.name}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.name"></b-input></td>

                        <td v-if="item.id !== editId">{{item.price}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.price"></b-input></td>

                        <td v-if="item.id!== editId">{{item.explain}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.explain"></b-input></td>

                        <td v-if="item.id !== editId">
                            <div v-if="item.status" class="tag is-success">ON</div>
                            <div v-else class="tag is-danger">OFF</div>
                        </td>
                        <td v-else>
                            <b-select placeholder="Status" v-model="form.status">
                                <option value=true>ON</option>
                                <option value=false>OFF</option>
                            </b-select>
                        </td>
                        <td v-if="item.id !== editId && item.id !== deleteId">
                            <b-button @click="openForm(item)" size="is-small" type="is-primary" outlined>Edit</b-button>&nbsp;
                            <b-button @click="openDelete(item)" size="is-small" type="is-danger" outlined>Delete</b-button>
                        </td>
                        <td v-else-if="item.id === editId" id="EditButtonGroup">
                            <b-button @click="editItem()" size="is-small" type="is-warning">Confirm</b-button>&nbsp;
                            <b-button @click="closeForm()" size="is-small" type="is-warning">close</b-button>
                        </td>
                        <td v-else id="DeleteButtonGroup">
                            <b-button @click="deleteItem(item)" size="is-small" type="is-danger">Confirm</b-button>&nbsp;
                            <b-button @click="closeForm()" size="is-small" type="is-warning">close</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ItemApiStore from "@/store/ItemApi"
export default {
    data(){
        return{
            items: [],
            editId: -1,
            deleteId: -1,
            form: {
                name: "",
                price: 0,
                explain: "",
                status: true
            }
        }
    },
    created(){
        this.fetchItems()
    },
    methods: {
        async fetchItems() {
            await ItemApiStore.dispatch('fetchItems')
            this.items = ItemApiStore.getters.items
        },
        openForm(item){
            this.editId = item.id
            let cloned = JSON.parse(JSON.stringify(item))
            this.form.name = cloned.name
            this.form.price = cloned.price
            this.form.explain = cloned.explain
            this.form.status = cloned.status
        },
        openDelete(item){
            this.deleteId = item.id
        },
        closeForm(){
            this.editId = -1
            this.deleteId= -1
            this.form= {
                name: "",
                price: 0,
                explain: "",
                status: true
            }
        },
        async editItem(){
            let payload={
                id: this.editId,
                name: this.form.name.trim(),
                price: parseInt(this.form.price),
                explain: this.form.explain.trim(),
                status: this.form.status
            }
            await ItemApiStore.dispatch("editItem",payload)
            this.closeForm()
            this.fetchItems()
        },
        async deleteItem(item){
            let payload={
                id: item.id
            }
            let res = await ItemApiStore.dispatch("deleteItem",payload)
            if(res.success){
                console.log("Delete Success");
                this.$swal("Delete Item Success", item.name, "success")
            }else{
                this.$swal("Delete Item Failed", item.name, "error")
            }
            this.fetchItems()
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