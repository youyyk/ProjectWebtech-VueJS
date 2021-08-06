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
export default {
  components: { AdminTableAward, PopUpCreateAward },
    data(){
        return{
        }
    },
    created(){
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
</style>