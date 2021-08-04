<template>
    <div>
        <!-- <router-link to="/home" v-if="isAuthen()">Add new Pokemon</router-link> -->
        <home></home>
    </div>
</template>

<script>
import Home from '@/views/Home'
// import AuthService from '@/services/AuthService'
import AuthUser from '@/store/AuthUser'

export default {
    components: {
        Home
    },
    methods:{
        isAuthen(){
            return AuthUser.getters.isAuthen
        }
    }
}
</script>

<style>

</style>