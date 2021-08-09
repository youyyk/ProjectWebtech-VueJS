<template>
    <div>
        <div id="pickDate">
            <b-field label="Select a date range"></b-field>
            <b-field label="(Not include Start Date and End Date)">
                <b-datepicker
                    placeholder="Click to select..."
                    v-model="datesChoose"
                    :locale="locale"
                    range
                    @input="selectDate()"
                    >
                </b-datepicker>
            </b-field>
            <b-button type="is-info" @click="clearFieldDate()">Clear Date</b-button>
        </div>
        <br>
        <section id="sortType">
            <b-checkbox-button v-model="checkBoxSort" @input="sortHistoryUsers()">
                <div v-if="this.checkBoxSort===true">Sort by Point Get</div>
                <div v-else>Sort by Point Used</div>
            </b-checkbox-button>
        </section>
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
                    <tr v-for="(user, index) in users" v-bind:key = "index">
                        <th>{{index+1}}</th>
                        <td>{{user.username}}</td>
                        <td>{{user.point_get}}</td>
                        <td>{{user.point_used}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService'
import HistoryBuyApi from '@/store/HistoryBuyApi'
import HistoryRewardApi from '@/store/HistoryRewardApi'
export default {
    data(){
        return{
            users: [],
            usersTmp: [],
            historyBuys: [],
            historyAwards: [],

            checkBoxSort: false,
            datesChoose:[],
            datesFormated: ["",""],
            locale: "en-CA"
        }
    },
    created(){
        this.fetchHistoryBuys()
        this.fetchHistoryAwards()
        this.getUsersData()
    },
    methods: {
        async fetchHistoryBuys(){
            await HistoryBuyApi.dispatch("fetchHistory")
            this.historyBuys = HistoryBuyApi.getters.history_buys
        },
        async fetchHistoryAwards(){
            await HistoryRewardApi.dispatch("fetchHistory")
            this.historyAwards = HistoryRewardApi.getters.history_rewards
        },
        selectDate(){
            this.datesFormated[0] = this.datesChoose[0].toISOString().slice(0,10)
            this.datesFormated[1] = this.datesChoose[1].toISOString().slice(0,10)
            this.datesFormated[0] = new Date(this.datesFormated[0]).getTime()
            this.datesFormated[1] = new Date(this.datesFormated[1]).getTime()
            this.setDataRange()
            this.sortHistoryUsers()
        },
        setDataRange(){
            for(let i=0; i<this.users.length; i++){
                this.users[i].point_used = 0 // Set old point = 0
                this.historyAwards.forEach(e =>{
                    let awardGotDate = new Date(e.date).getTime() // Time Awards got bu user
                    if(awardGotDate > this.datesFormated[0] && awardGotDate < this.datesFormated[1] && this.users[i].username===e.name_user){
                        this.users[i].point_used += e.point
                    }
                })
            }
            for(let i=0; i<this.usersTmp.length; i++){
                this.users[i].point_get = 0
                this.historyBuys.forEach(e =>{
                    let itemGotDate = new Date(e.date).getTime() 
                    if(itemGotDate > this.datesFormated[0] && itemGotDate < this.datesFormated[1] && this.users[i].username===e.name_user){
                        this.users[i].point_get += e.point_receive
                    }
                })
            }
        },        
        async getUsersData(){
            let userList = await UserService.getUser()
            userList.forEach(e=>{
                let payload ={
                    username: e.username,
                    point_get: 0,
                    point_used: 0,
                }
                this.users.push(payload)
            })
            this.getDataNotFilter()
        },
        getDataNotFilter(){
            for(let i=0; i<this.users.length; i++){
                this.historyBuys.forEach(e=>{
                    if (this.users[i].username===e.name_user) {
                        this.users[i].point_get += e.point_receive
                    }
                })
                this.historyAwards.forEach(e=>{
                    if (this.users[i].username===e.name_user) {
                        this.users[i].point_used += e.point
                    }
                })
            }
            this.sortHistoryUsers()
        },
        sortHistoryUsers(){
            if(!this.checkBoxSort){
                this.users.sort((a,b) =>{
                    return b.point_used-a.point_used
                })
                return
            }
            this.users.sort((a,b) =>{
                return b.point_get-a.point_get
            })
        },
        clearFieldDate(){
            this.users = []
            this.datesChoose=[]
            this.datesFormated = ["",""]
            this.getUsersData()
        },

    }
}
</script>

<style scoped lang="scss">
#sortType{
    width: 20%;
    margin-left: auto;
    margin-right: auto;
}
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