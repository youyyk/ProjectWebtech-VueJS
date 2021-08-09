import Axios from "axios"
const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT


export default{
    async getUser(){
        try{
            let res = await Axios.get(`${api_endpoint}/users`)
            return res.data
        }catch (e){

        }

    },
    async getUserById (id){
        try{
            let res = await Axios.get(`${api_endpoint}/users/${id}`)
            return res.data
        }catch (e){

        }
    }
    
}