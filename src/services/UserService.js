import Axios from "axios"
const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT


export default{
    async getUserById (id){
        try{
            let res = await Axios.get(`${api_endpoint}/users/${id}`)
            return res.data
        }catch (e){

        }

    }
}