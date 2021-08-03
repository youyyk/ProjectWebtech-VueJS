<template>
    <div>
        <div id="tableBoard">
            <table class="table is-hoverable is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Name Awards</th>
                        <th>Point</th>
                        <th>Stock</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(award, index) in awards" v-bind:key = "index">
                        <th>{{award.id}}</th>
                        <td>{{award.name}}</td>
                        <td>{{award.point}}</td>
                        <td>{{award.stock}}</td>
                        <td>{{award.status}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import AwardsAPI from "@/store/AwardsAPI"
export default {
    data(){
        return{
            awards: [],
            // isSwitched: true
        }
    },
    created(){
        this.fetchAwards()
    },
    methods: {
        async fetchAwards() {
            await AwardsAPI.dispatch('fetchAwards')
            this.awards = AwardsAPI.getters.awards
            console.log(this.awards)
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