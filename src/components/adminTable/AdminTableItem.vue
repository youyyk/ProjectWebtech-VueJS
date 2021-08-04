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

                        <td v-if="index !== editIndex">{{item.name}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.name"></b-input></td>

                        <td v-if="index !== editIndex">{{item.price}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.price"></b-input></td>

                        <td v-if="index !== editIndex">{{item.explain}}</td>
                        <td v-else><b-input size="is-small" placeholder="Name" v-model="form.explain"></b-input></td>

                        <td v-if="index !== editIndex">{{item.status}}</td>
                        <td v-else>
                            <b-select placeholder="Status" v-model="form.status">
                                <option value=true>ON</option>
                                <option value=false>OFF</option>
                            </b-select>
                        </td>
                        <td v-if="index !== editIndex">
                            <b-button @click="openForm(index, item)" size="is-small" type="is-danger" outlined>Edit</b-button>
                        </td>
                        <td v-else id="EditButtonGroup">
                            <b-button @click="editItem()" size="is-small" type="is-warning">Confirm</b-button>&nbsp;
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
            editIndex: -1,
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
        openForm(index, award){
            this.editIndex = index
            let cloned = JSON.parse(JSON.stringify(award))
            this.form.name = cloned.name
            this.form.price = cloned.price
            this.form.explain = cloned.explain
            this.form.status = cloned.status
        },
        closeForm(){
            this.editIndex = -1
            this.form= {
                name: "",
                price: 0,
                explain: "",
                status: true
            }
        },
        async editItem(){
            let payload={
                index: this.editIndex,
                name: this.form.name.trim(),
                price: parseInt(this.form.price),
                explain: this.form.explain.trim(),
                status: this.form.status
            }
            await ItemApiStore.dispatch("editItem",payload)
            this.closeForm()
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