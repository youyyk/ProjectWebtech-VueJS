<template>
    <div>
        <div id="tableBoard">
            <table class="table is-hoverable is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Name Item</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" v-bind:key = "index">
                        <th>{{item.id}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>
                            <!-- <b-switch v-model="isSwitched" v-if="checkSwitch(item)"> -->
                                {{ item.status }}                
                            <!-- </b-switch> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ItemsAPI from "@/store/ItemsAPI"
export default {
    data(){
        return{
            items: [],
            // isSwitched: true
        }
    },
    created(){
        this.fetchItems()
    },
    methods: {
        async fetchItems() {
            await ItemsAPI.dispatch('fetchItems')
            this.items = ItemsAPI.getters.items
            console.log(this.items)
        },
        // checkSwitch(tmp){
        //     this.isSwitched = tmp.status ? true : false
        //     return true
        // }
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