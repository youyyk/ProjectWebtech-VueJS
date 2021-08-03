<template>
  <div>

  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
    created() {
        AuthService.logout()
        this.$router.push('/home')
    }
}
</script>

<style>

</style>