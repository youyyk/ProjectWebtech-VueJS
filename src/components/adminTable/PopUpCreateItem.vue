<template>
    <div id="cardCreate">
        <section>
            <button class="button is-primary is-medium"
                @click="isComponentModalActive = true">
                Add new Item
            </button>

            <b-modal :active.sync="isComponentModalActive" has-modal-card>
                <form action="">
                    <div class="modal-card" style="width: 270px">
                        <header class="modal-card-head">
                            <p class="modal-card-title">New Item</p>
                        </header>
                        <section class="modal-card-body">
                            <b-field label="Name">
                                <b-input v-model="form.name"></b-input>
                            </b-field>

                            <b-field label="Price">
                                <b-input v-model="form.price"></b-input>
                            </b-field>

                            <b-field label="Explain">
                                <b-input v-model="form.explain"></b-input>
                            </b-field>

                            <b-field label="Status">
                                <b-select placeholder="Status" v-model="form.status">
                                    <option value=true>ON</option>
                                    <option value=false>OFF</option>
                                </b-select>
                            </b-field>
                        </section>
                        <div>
                            <footer class="modal-card-foot">
                                <div style="margin: auto">
                                    <button @click="addItem()" class="button is-success is-rounded">Create</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </form>
            </b-modal>
        </section>
    </div>
</template>

<script>
import ItemApiStore from "@/store/ItemApi"
export default {
    data() {
        return {
            isComponentModalActive: false,
            form: {
                name: "",
                price: 0,
                explain:"",
                status: true
            }
        }
    },
    methods:{
        async addItem(){
            let payload={
                name: this.form.name.trim(),
                price: parseInt(this.form.price),
                explain:this.form.explain,
                status: this.form.status
            }
            await ItemApiStore.dispatch("addItem",payload)
        }
    }
}
</script>

<style scoped lang="scss">
.foorm{
    margin: auto;
}
</style>