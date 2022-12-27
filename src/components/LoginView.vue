<template>
  <h2>Login</h2>
  <div>
    <input
      type="text"
      placeholder="Enter Email"
      v-model="userEmail"
    /><br /><br />
    <input
      type="password"
      placeholder="Enter Password"
      v-model="userPassword"
    /><br /><br />
    <button v-on:click="onSignIn">SignIN</button>
  </div>
  <br />
  <RouterLink to="/signup">SignUp</RouterLink>
</template>
<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  name: "LoginView",
  components: { RouterLink },
  data() {
    return {
      userEmail: "",
      userPassword: "",
    };
  },
  mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "HomeView" });
        }
    },
  methods: {
    async onSignIn() {
      const result = await axios(
        `http://localhost:3000/users?email=${this.userEmail}&password=${this.userPassword}`
      );

      if (result.status === 200) {
        alert("User SignedIN");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomeView" });
      }
    },
  },
};
</script>
