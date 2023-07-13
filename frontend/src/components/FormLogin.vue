<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const submit = () => {
  const credentials = {
    email: email.value,
    password: password.value,
  };
  axios
    .post(
      `https://currencyconverterapp.up.railway.app/api/v1/auth/login`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      router.push("/home");
      localStorage.setItem("token", res.data.token);
    })
    .catch((error) => console.log(error.response.data.message));
};
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <input placeholder="Enter email" type="text" v-model="email" />
      <input placeholder="Enter password" type="password" v-model="password" />
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
</template>

<style scoped>
input[type="text"],
input[type="password"] {
  padding: 8px;
  padding-left: 12px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  width: 100%;
  margin-bottom: 20px;
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

@media screen and (max-width: 800px) {
  form {
    width: 50vw;
  }
}

@media screen and (max-width: 370px) {
  form {
    width: 75vw;
  }

  button {
    padding: 8px 46%;
  }
}
</style>
