<template>
    <div id="cardCreate">
        <section>
            <button class="button is-primary is-medium"
                @click="isComponentModalActive = true">
                Add new Award
            </button>

            <b-modal :active.sync="isComponentModalActive" has-modal-card>
                <form action="">
                    <div class="modal-card" style="width: 270px">
                        <header class="modal-card-head">
                            <p class="modal-card-title">New Award</p>
                        </header>
                        <section class="modal-card-body">
                            <b-field label="Name">
                                <b-input v-model="form.name"></b-input>
                            </b-field>

                            <b-field label="Point">
                                <b-input v-model="form.point"></b-input>
                            </b-field>
                            <b-field label="Stock">
                                <b-input v-model="form.stock"></b-input>
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
                                    <button @click="addAward()" class="button is-success is-rounded">Create</button>
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
import RewardApiStore from "@/store/AwardApi"
export default {
    data() {
        return {
            isComponentModalActive: false,
            form: {
                name: "",
                point: 0,
                stock: 0,
                status: true
            }
        }
    },
    methods:{
        async addAward(){
            let payload={
                name: this.form.name.trim(),
                point: parseInt(this.form.point),
                stock: parseInt(this.form.stock),
                status: this.form.status
            }
            await RewardApiStore.dispatch("addAward",payload)
        }
    }
}
</script>

<style scoped lang="scss">
.foorm{
    margin: auto;
}
</style>