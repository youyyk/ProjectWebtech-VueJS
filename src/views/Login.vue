<template>
  <!-- <div class="login">
      <div id="FormLogin">
            <section>
                <body>
                    <b-field label="Email">
                    <b-input></b-input>
                </b-field>

                <b-field label="Password">
                    <b-input></b-input>
                </b-field>
                </body>
            </section>
     </div>
  </div> -->
    <div class="overlay">
        <body>
        <form>
            <div class="con">
                <header class="head-form">
                    <h2>Log In</h2>
                        <p>login here using your email and password</p>
                </header>
                <br>
                <div class="field-set">
                    <span class="input-item">
                        <i class="fa fa-user-circle"></i>
                    </span>
                <input class="form-input" id="txt-input" type="email" placeholder="email" required>    
                <br>
           <!-- Password -->
                <span class="input-item">
                    <i class="fa fa-key"></i>
                </span>
            <!-- Password Input -->
                <input class="form-input" type="password" placeholder="password" id="pwd"  name="password" required>
            <!--button LogIn -->
                <button class="log-in"> Log In </button>
            </div>
            </div>
        </form>
        </body>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped lang="scss">
#FormLogin{
    text-align: left;
    width: 30%;
}

body {
    background-image: linear-gradient(-225deg, #e4c5eb 0%, #FFE6FA 100%);
    background-image: linear-gradient(to top, #e1c0e7 0%, #fad9ba 100%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    font-family: inherit;
    // opacity: .95;
}

form {
    width: 450px;
    min-height: 500px;
    height: auto;
    border-radius: 5px;
    margin: 1% auto;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 2%;
    background-image: linear-gradient(-225deg, #e1c1f0 50%, #f8debb 50%);
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
    background: #fff;
    color: #333;
    padding: 14.5px 0px 15px 9px;
    border-radius: 5px 0px 0px 5px;
}

input[class="form-input"]
{
    width: 250px;
    height: 50px;
  
    margin-top: 2%;
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
    background: #fff;
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
    transform: translatey(3px);
    box-shadow: none;
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
