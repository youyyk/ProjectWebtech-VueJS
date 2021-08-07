<template>
    <div>
        <home></home>
    </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'

import Home from '../Home.vue'

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