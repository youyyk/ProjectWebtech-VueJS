<template>
    <div>
        <br>
        <div><h1 class="title is-1"> Admin Users Board</h1></div>
        <br>
        <admin-table-users></admin-table-users>
    </div>
</template>

<script>
import AdminTableUsers from '../../components/adminTable/AdminTableUsers.vue'
export default {
    components: { 
        AdminTableUsers 
    },
    created(){
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
</style>