<template>
    <div>
        <br>
        <div><h1 class="title is-1"> Admin Manage Items</h1></div>
        <br>
        <pop-up-create-item></pop-up-create-item>
        <br>
        <admin-table-item></admin-table-item>
    </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import AdminTableItem from '../../components/adminTable/AdminTableItem.vue'
import PopUpCreateItem from '../../components/adminTable/PopUpCreateItem.vue'
export default {
  components: { PopUpCreateItem, AdminTableItem },
    data(){
        return{

        }
    },
    created(){
    },

    methods: {
        isAuthen() {
            return AuthUser.getters.isAuthen
        },
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