<template>
    <div>
        <!-- <div id="pickDate">
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
            <b-checkbox-button v-model="checkBoxSort" @input="sortDataUsers()">
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
                    <tr v-for="(user, index) in dataUsers" v-bind:key = "index">
                        <th>{{index+1}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.Total_Buy}}</td>
                        <td>{{user.point_used}}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
</template>

<script>
// import DataUsersAPI from "@/store/DataUsersAPI"
// import RewardApiStore from "@/store/AwardApi"
// export default {
//     data(){
//         return{
//             dataUsers: [],
//             awards: [],
//             items: [],
//             checkBoxSort: false,
//             datesChoose: [],
//             datesFormated: ["",""],
//             locale: "en-CA"
//         }
//     },
//     created(){
//         this.fetchDataUsers()
//         this.fetchRewards()
//         this.sortDataUsers()
//     },
//     methods: {
//         async fetchDataUsers() {
//             await DataUsersAPI.dispatch('fetchDataUsers')
//             this.dataUsers = DataUsersAPI.getters.dataUsers
//             for (let i=0; i< this.dataUsers.length; i++){
//                 this.dataUsers[i].Total_Buy =  (this.dataUsers[i].Total_Buy*0.02)+this.dataUsers[i].point_used
//             }
//             this.checkBoxSort = false
//             this.sortDataUsers()
//         },
//         async fetchRewards(){
//             await RewardApiStore.dispatch('fetchAwards')
//             this.awards = RewardApiStore.getters.awards
//         },
//         selectDate(){
//             this.datesFormated[0] = this.datesChoose[0].toISOString().slice(0,10)
//             this.datesFormated[1] = this.datesChoose[1].toISOString().slice(0,10)
//             this.datesFormated[0] = new Date(this.datesFormated[0]).getTime()
//             this.datesFormated[1] = new Date(this.datesFormated[1]).getTime()
//             this.setDataRange()
//             this.sortDataUsers()
//         },
//         setDataRange(){
//             for(let i=0; i<this.dataUsers.length; i++){
//                 this.dataUsers[i].point_used = 0 // Set old point = 0
//                 this.dataUsers[i].history_awards.forEach(e =>{
//                     let awardData = this.getRewardById(e.award) // Get Data Award
//                     let awardGotDate = new Date(e.date).getTime() // Time Awards got bu user
//                     if(awardGotDate > this.datesFormated[0] && awardGotDate < this.datesFormated[1]){
//                         this.dataUsers[i].point_used += awardData.point
//                     }
//                 })
//             }

//             for(let i=0; i<this.dataUsers.length; i++){
//                 this.dataUsers[i].Total_Buy = 0 // Set old point = 0
//                 this.dataUsers[i].history_buys.forEach(e =>{
//                     let itemGotDate = new Date(e.date).getTime() // Time Awards got bu user
//                     if(itemGotDate > this.datesFormated[0] && itemGotDate < this.datesFormated[1]){
//                         this.dataUsers[i].Total_Buy += e.point_receive
//                     }
//                 })
//             }
//         },
//         sortDataUsers(){
//             if(this.checkBoxSort===false){
//                 this.dataUsers.sort((a,b) =>{
//                     return b.point_used-a.point_used
//                 })
//                 return
//             }
//             this.dataUsers.sort((a,b) =>{
//                 return b.Total_Buy-a.Total_Buy
//             })
//         },
//         getRewardById(id){
//             return this.awards[id-1]
//         },
//         clearFieldDate(){
//             this.datesChoose = []
//             this.datesFormated = ["",""]
//             this.fetchDataUsers()
//         }
//     }
// }
</script>

<style scoped lang="scss">
// #sortType{
//     width: 20%;
//     margin-left: auto;
//     margin-right: auto;
// }
// #pickDate{
//     width: 50%;
//     margin-left: auto;
//     margin-right: auto;
// }
// #tableBoard{
//     .table{
//         width: 75%;
//         text-align: center;
//         padding-top: 2em;
//         margin-left: auto;
//         margin-right: auto;
//     }
// }
</style>