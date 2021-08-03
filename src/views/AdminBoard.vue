<template>
    <div>
        <div id="pickDate">
            <b-field label="Select a date range">
                <b-datepicker
                    placeholder="Click to select..."
                    v-model="datesChoose"
                    range>
                </b-datepicker>
            </b-field>
        </div>
        <br>
        <div id="tableBoard">
            <table class="table is-hoverable is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Point Get</th>
                        <th>Point Used</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in dataUsers" v-bind:key = "index">
                        <th>{{index+1}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.Total_Buy}}</td>
                        <td>{{user.point_used}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DataUsersAPI from "@/store/DataUsersAPI"
export default {
    data(){
        return{
            // default sort by Point Time
            dataUsers: [],
            datesChoose: [],
        }
    },
    created(){
        this.fetchDataUsers()
    },
    methods: {
        async fetchDataUsers() {
            await DataUsersAPI.dispatch('fetchDataUsers')
            this.dataUsers = DataUsersAPI.getters.dataUsers
            console.log(this.dataUsers)
            for (let i=0; i< this.dataUsers.length; i++){
                this.dataUsers[i].Total_Buy =  (this.dataUsers[i].Total_Buy*0.02)+this.dataUsers[i].point_used
            }
        },
    }
}
</script>

<style scoped lang="scss">
#pickDate{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}
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