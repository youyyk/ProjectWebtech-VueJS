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
    }
}
</script>

<style scoped lang="scss">

</style>