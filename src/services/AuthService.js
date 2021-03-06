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
    getApiHeader() {
        if (this.jwt !== undefined && this.jwt !== "") {
            return {
                headers: {
                    Authorization: `Bearer ${this.jwt}`
                }
            }
        } else {
            this.jwt = JSON.parse(localStorage.getItem(auth_key)).jwt
            return {
                headers: {
                    Authorization: `Bearer ${this.jwt}`
                }
            }
        }
    },
    getUser(){
        return user
    },
    getItem(){
        return user.items
    },
    getJwt(){
        return jwt
    },
    getPoint_now(){
        return user.point_now
    },
    getRole(){
        try{
            return user.role.name
        }catch(e){
            return
        }
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
                    type: res.data.user.role.type === "admin",
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
    async updateItem(payload){
        try{
            let url = `${api_endpoint}/users/${payload.id}`
            let body={
                items: payload.items,
                point_now: payload.point_now
            }
            let res = await Axios.put(url, body, this.getApiHeader())
            if(res.status === 200){
                return {
                    success: true
                }
            }
        }catch (e) {
            return {
                success: false
            }
        }
    },
    async updatePoint(payload){
        try{
            let url = `${api_endpoint}/users/${payload.id}`
            let body={
                point_now: payload.point_now
            }
            let res = await Axios.put(url, body, this.getApiHeader())
            if(res.status === 200){
                return {
                    success: true
                }
            }
        }catch (e) {
            return {
                success: false
            }
        }
    },
    async updateDate(payload){
        try{
            let url = `${api_endpoint}/users/${payload.id}`
            let body={
                date: payload.date
            }
            let res = await Axios.put(url, body, this.getApiHeader())
            if(res.status === 200){
                return {
                    success: true
                }
            }
        }catch (e) {
            return {
                success: false
            }
        }
    },
    logout() {
        localStorage.removeItem(auth_key)
    }

}