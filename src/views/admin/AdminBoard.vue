<template>
    <div>
        <br>
        <div><h1 class="title is-1"> Admin Users Board</h1></div>
        <br>
        <admin-table-users></admin-table-users>
    </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import AdminTableUsers from '../../components/adminTable/AdminTableUsers.vue'
export default {
    components: { 
        AdminTableUsers 
    },

    created(){
    },
    
    methods: {
        isAuthen() {
            return AuthUser.getters.isAuthen
        }
    },
    mounted(){
        if(!this.isAuthen()){
            this.$swal("Restricted Area","You have no permission","warning")
            this.$router.push("/")
        }
    }
}
</script>

<style scoped lang="scss">
</style>