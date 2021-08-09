<template>
<div class="background">
        <form @submit.prevent="login">
            <header class="head-form">
                <h2>Log In</h2>
                    <p>login here using your user and password</p>
            </header>
            <br>

            <div class="field-set">
                <span class="input-item">
                    <i class="fa fa-user-circle"></i>
                </span>
            <input class="form-input" id="txt-input" v-model="form.user" type="text" placeholder="user" required>    
            <br>
        <!-- Password -->
            <span class="input-item">
                <i class="fa fa-key"></i>
            </span>
        <!-- Password Input -->
            <input class="form-input" type="password" v-model="form.password" placeholder="password" id="pwd"  name="password" required>
        <!--button LogIn -->
            <div>
                <button type="submit"> Log In </button>
            </div>
            </div>
        </form>
        <footer class="site-footer">
            <div class="footer-inside">
                <p class="sub">LOGIN AND SHOPPING NOW !!!</p>
            </div>
        </footer>
</div>
</template>

<script>
// import AuthService from '@/services/AuthService'
import AuthUser from '@/store/AuthUser'
export default {
    data() {
        return {
            form: {
                user: '',
                password: ''
            }
        }
    },
    methods: {
        async login(){
            let res = await AuthUser.dispatch('login',this.form)
            if (res.success){
                this.$swal("Login Success", `Welcome, ${res.user.username}`, "success")
                this.$router.push('/') //กด login แล้วไปหน้า home
            }
            else{
                this.$swal("Login Failed", res.message, "error");
            }
        },
    }
}
</script>

<style scoped lang="scss">

.sub{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
    font-family: inherit;
    font-size: 80px;
    color: #ff7a18;
}

.site-footer {
    background-color: rgb(0, 0, 0);
    height: 100;
}
.background {
    background-image: url(https://i.pinimg.com/564x/4a/38/7b/4a387bda853bca3782d73234c786a150.jpg);
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: 5% 60%;
    background-repeat: no-repeat;
}


form {
    width: 50%;
    min-height: 50px;
    height: auto;
    border-radius: 5px;
    margin: 2% auto;
    box-shadow: 0 9px 50px hsla(323, 95%, 47%, 0.31);
    padding: 2%;
    background-image: linear-gradient(-225deg, #d693f7 50%, #e4be8d 50%);
    background-repeat: no-repeat;
}

header {
    margin: 2% auto 10% auto;
    text-align: center;
}

header h2 {
    font-size: 250%;
    font-family: inherit;
    width: 600;
    color: #3e403f;
}

header p {
    letter-spacing: 0.05em;
}

.input-item {
    background: rgb(112, 106, 112);
    color: #333;
    padding: 14.5px 0px 15px 9px;
    border-radius: 5px 0px 0px 5px;
}

input[class="form-input"]
{
    width: 250px;
    height: 50px;
  
    margin-top: 1%;
    padding: 15px;
    
    font-size: 16px;
    font-family: 'Abel', sans-serif;
    color: #5E6472;
  
    outline: none;
    border: none;
  
    border-radius: 0px 5px 5px 0px;
    transition: 0.2s linear; 
}

input[id="txt-input"] {
    width: 250px;
}

input:focus {
    transform: translateX(-2px);
    border-radius: 5px;
}

button {
    display: inline-block;
    color: #252537;
  
    width: 280px;
    height: 50px;
  
    padding: 0 20px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    
    outline: none;
    border: none;
  
    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;
    
    margin: 7% auto;
    letter-spacing: 0.05em;
}

.submits {
    width: 48%;
    display: inline-block;
    margin-left: 2%;
}

button:hover {
    background: #9362d3;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: 0 0 5px #c300ff,
                0 0 25px #f7d43c,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
}

button:hover {
    animation: anima 0.4s ease-in-out infinite alternate;
}

@keyframes anima {
    0% {
        transform: translateY(3px);
    }
    100% {
        transform: translateY(5px);
    }
}


</style>
