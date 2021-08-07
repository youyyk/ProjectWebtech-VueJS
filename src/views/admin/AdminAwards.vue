<template>
    <div>
        <br>
        <div><h1 class="title is-1"> Admin Manage Awards</h1></div>
        <br>
        <pop-up-create-award></pop-up-create-award>
        <br>
        <admin-table-award></admin-table-award>
    </div>
</template>

<script>
import AdminTableAward from '../../components/adminTable/AdminTableAward.vue'
import PopUpCreateAward from '../../components/adminTable/PopUpCreateAward.vue'
import AuthUser from '@/store/AuthUser'
export default {
  components: { AdminTableAward, PopUpCreateAward },
    data(){
        return{
        }
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