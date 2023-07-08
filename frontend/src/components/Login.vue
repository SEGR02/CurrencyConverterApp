<script setup>
import Logo from "../assets/img/Logo.png";
import LogoMobile from "../assets/img/LogoMobile.png";
import FormLogin from "./FormLogin.vue";
</script>

<template>
  <div class="container">
    <div class="loginForm">
      <div class="logoContainer">
        <img class="logo" :src="Logo" alt="logo" />
        <img class="logo-mobile" :src="LogoMobile" alt="logo" />
      </div>
      <div class="form">
        <h1>Login to account</h1>
        <p style="text-align: center">
          Enter your credentials to access your
          <br class="br-mobile" />account
        </p>
        <FormLogin />
      </div>
      <div class="footer">
        <p class="p-footer">©2023 example</p>
        <p class="p-footer">Privacy Policy</p>
      </div>
    </div>
    <div class="backgroundLogin"></div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.loginForm {
  width: 50vw;
  height: 100vh;
}
.backgroundLogin {
  background-image: url("../assets/img/backgroundLogin.png");
  background-position: center;
  background-size: cover;
  width: 50vw;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

input[type="text"],
input[type="password"] {
  padding: 8px;
  padding-left: 12px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  width: 100%;
  margin-bottom: 20px;
}

p {
  color: #4f4d55;
  margin: 0;
  margin-top: 12px;
  margin-bottom: 24px;
}
h1 {
  margin: 0;
}
label {
  padding-left: 10px;
  font-weight: 500;
}
.footer {
  width: 50vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.p-footer {
  color: #4f4d55;
  font-size: 14px;
}

.logo-mobile {
  display: none;
}

.br-mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .backgroundLogin {
    display: none;
    width: 0;
    height: 0;
  }
  .loginForm {
    width: 100vw;
    height: 100vh;
  }

  .footer {
    width: 100vw;
    height: 10vh;
  }

  .logo {
    max-width: 500px;
  }
}

@media screen and (max-width: 500px) {
  .br-mobile {
    display: block;
  }
  .logo {
    display: none;
  }

  .logo-mobile {
    display: inline;
  }
  .loginForm {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
  }
  .logoContainer {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
  }
}

@media screen and (max-width: 370px) {
  h1 {
    font-size: 26px;
  }

  p,
  label,
  .p-footer {
    font-size: 12px;
  }

  button {
    padding: 8px 46%;
  }
}
</style>
