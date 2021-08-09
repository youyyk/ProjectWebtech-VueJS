<template>
    <div>
        <footer class="site-footer">
            <div class="footer-inside">
                <h1 class="text"> Admin Users Board</h1>
            </div>
        </footer>
        <div class="bg">
        <pop-up-create-award></pop-up-create-award>
        <br>
        <div class="award">
            <admin-table-award></admin-table-award>
        </div>
        </div>
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
        if(!(this.isAuthen() && !this.isAdmin())){
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
    background-image: url(https://image.flaticon.com/icons/png/512/861/861506.png);
    background-repeat: no-repeat;
    background-size: 15%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    background-size: 10%;
}

</style>