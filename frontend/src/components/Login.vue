<script setup>
import Logo from "../assets/img/Logo.png";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

// const state = useCounterStore();
const router = useRouter();
const email = ref("");
const password = ref("");

const submit = () => {
  try {
    const credentials = {
      email: email.value,
      password: password.value,
    };
    axios
      .post(`http://localhost:8000/api/v1/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("user logged");
        router.push("/home");
      })
      .finally(() => dispatch(setIsLoading(false)))
      .catch((error) => alert(error.response.data.message));
    // dispatch(loginUser(credentials));
  } catch (error) {
    alert(error);
  }
};
</script>

<template>
  <div class="container">
    <div class="loginForm">
      <img :src="Logo" alt="logo" />
      <div class="form">
        <h1>Login to account</h1>
        <p>Enter your credentials to access your account</p>
        <form @submit.prevent="submit">
          <div>
            <input placeholder="Enter email" type="text" v-model="email" />
            <input
              placeholder="Enter password"
              type="password"
              v-model="password"
            />
          </div>
          <div class="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label for="checkbox">Remember machine for 30 days</label>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
      <div class="footer">
        <p class="p-footer">©2023 example</p>
        <p>Privacy Policy</p>
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
.checkbox {
  height: 2vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2px;
}
input[type="checkbox"] {
  border: 1px solid red;
}
button {
  background-color: #1751d0;
  border: none;
  border-radius: 6px;
  padding: 8px 48%;
  color: #fff;
  margin-top: 20px;
}

button:hover {
  cursor: pointer;
}

form {
  width: 25vw;
  margin-right: 18px;
}
.footer {
  width: 50vw;
  height: 10vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.p-footer {
  color: #4f4d55;
  font-size: 14px;
}
</style>
