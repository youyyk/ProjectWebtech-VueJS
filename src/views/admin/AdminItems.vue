<template>
    <div>
        <footer class="site-footer">
            <div class="footer-inside">
                <h1 class="text"> Admin Users Board</h1>
            </div>
        </footer>
        <div class="bg">
        <!-- <br>
        <pop-up-create-item></pop-up-create-item> -->
        <br>
        <admin-table-item></admin-table-item>
        </div>
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
        isAdmin(){
            return AuthUser.getters.isAdmin
        },
    },
    mounted(){
        if( this.isAuthen() && !this.isAdmin()){
            this.$swal("Restricted Area","You have no permission","warning")
            this.$router.push("/")
        }
    }
}
</script>

<style scoped lang="scss">

.text{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
    font-family: inherit;
    font-size: 45px;
    color: #ffffff;
    margin-top: 0%;
}

.site-footer {
    background-color: rgb(0, 0, 0);
    height: 100;
    width: 100%;
}

.bg{
    background-image: url(	https://image.flaticon.com/icons/png/512/2721/2721282.png);
    background-repeat: no-repeat;
    background-size: 15%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    background-size: 15%;
}
</style>