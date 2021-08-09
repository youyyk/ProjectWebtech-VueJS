<template>
    <div>
        <footer class="site-footer">
            <div class="footer-inside">
                <h1 class="text"> Admin Users Board</h1>
            </div>
        </footer>
        <div class="bg">
        <admin-table-users></admin-table-users>
        </div>
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
    background-image: url(https://image.flaticon.com/icons/png/512/2206/2206368.png);
    background-repeat: no-repeat;
    background-size: 15%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}
</style>