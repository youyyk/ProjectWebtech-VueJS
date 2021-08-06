import Axios from "axios"

const auth_key = "auth-home"
let auth = JSON.parse(localStorage.getItem(auth_key)) //เก็บข้อมูล user
const user = auth ? auth.user : ""
const jwt = auth ? auth.jwt : ""
const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || 'http://localhost:1337'


export default {
    isAuthen(){
        return (user !== "") && (jwt !== "")
    },
    isAdmin(){
        return this.isAuthen() && (user.role.type === "admin")
    },
    getApiHeader(){
        if(jwt !== ""){
            return{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            }      
        }
        return {}  
    },

    getUser(){
        return user
    },

    getJwt(){
        return jwt
    },
    async login({ user, password }){
        try {
            let url = api_endpoint + "/auth/local"
            let body = {
                identifier: user,
                password: password
            }
            let res = await Axios.post(url, body)
            if(res.status === 200){
                // console.log(res.data);
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return {
                    success: true,
                    user: res.data.user,
                    jwt: res.data.jwt,
                    type: this.isAdmin(),
                }
            }else{
                console.log("NOT 200", res);
                return {
                    success: false,
                    message: "Unknow status code " + res.status
                }
            }
            
        } catch (e) {
            console.error(e);
            if(e.response.status === 400){
                // console.log(e.response.data.message[0].messages[0].message);
                return {
                    success: false,
                    message: e.response.data.message[0].messages[0].message
                }
            }else{
                return{
                    success: false,
                    message: "Unknown error " + e.response
                }
            }
        }
    },
    async signUp({ username, email, password }){
        try {
            let url = `${api_endpoint}/auth/local/register`
            let body = {
                username: username,
                email: email,
                password: password
            }
            let res = await Axios.post(url, body)
            if(res.status === 200){
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                return {
                    success: true,
                    user: res.data.user,
                    jwt: res.data.jwt
                }
            }else{
                console.log("NOT 200", res);
            }
        } catch (e) {
            if(e.response.status === 400){
                // console.log(e.response.data.message[0].messages[0].message);
                return {
                    success: false,
                    message: e.response.data.message[0].messages[0].message
                }
            } else {
                return
            }
        }
    },

    logout() {
        localStorage.removeItem(auth_key)
    }

}