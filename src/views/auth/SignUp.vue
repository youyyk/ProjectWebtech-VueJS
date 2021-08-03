<template>
  <div class="signUp">
      <div id="FormSingUp">
            <section>
                <h1>Sign Up</h1>
                    <div class="user">
                        <label>User</label>
                        <input class="input is-rounded" placeholder="user" v-model="form.user" type="text">
                    </div> 
                <label>Password</label>
                    <div class="passWord">
                        <input class="input is-rounded" v-model="form.passWord" type="password" placeholder="password input" password-reveal>
                    </div>
                <label>Confirm Password</label>
                    <div class="confirmPass">
                        <input class="input is-rounded" v-model="form.confirmPass" type="password" placeholder="confirm password" password-reveal>
                    </div>
            </section>
            <br>
            <button @click="signUp"><strong>Sign Up</strong></button>
                
     </div>
  </div>
</template>

<script>
import dataSignUpStore from '@/store/dataSignUp'
export default {
    data() {
        return {
            form: {
                user: '',
                passWord: '',
                confirmPass: ''
            },

            newUser: 'baitoey'
            
        }
    },
    methods: {
        clearForm() {
            this.form = {
                user: '',
                passWord: '',
                confirmPass: ''
            }
        },
        signUp() {
            let payload = {
            user: this.form.user,
            passWord: this.form.passWord,
            confirmPass: this.form.confirmPass
        }
            dataSignUpStore.dispatch('signUp', payload)
            console.log(payload)
            this.clearForm()
        }
    }
}
</script>

<style scoped lang="scss">

#FormSingUp{
    text-align: left;
    width: 35%;
    margin-left: 760px;
    // margin-top: 10px;
}

h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 20px;
    border-bottom: 4px solid #f75726;
    margin-top: 40px;
}

label {
    color: dimgrey;
    font-size: 16px;
}

input, .signUp{
    padding: 10px;
    margin: 10px;
    margin-right: 100px;
    flex: 1;
}

button {
    background-color: #e78930; 
    border: none;
    color: white;
    padding: 15px 70px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    margin-top: 10px;
    margin-left: 80px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    border-radius: 8px;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.signUp {
    background-image: url(	https://www.sapogo.com/Upload/Article/2021/6/bf3366dfcdca2177a5aeecde14e24350.jpg);
    position: absolute;
    background-position-y: 50px;
    background-position-x: 20px;
    background-repeat: no-repeat;
    margin-top: 70px;
    top: 0%;
    object-fit: cover;
    display: flex;
}

</style>
