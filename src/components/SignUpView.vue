<template>
    <h2>SignUp</h2>
    <div>
        <input type="text" placeholder="Enter Name" v-model="userName" ><br /><br />
        <input type="text" placeholder="Enter Email" v-model="userEmail"><br /><br />
        <input type="password" placeholder="Enter Password" v-model="userPassword"><br /><br />
        <button v-on:click="onSignUp" >SignUp</button>
    </div><br />
    <RouterLink to="/signin">Login</RouterLink>
</template>
<script>

//imports
import axios from "axios"
import { RouterLink } from "vue-router"

export default {
    name: "SignUpView",
    data() {
        return {
            userName: "",
            userEmail: "",
            userPassword: ""
        };
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "HomeView" });
        }
    },
    methods: {
        async onSignUp() {
            const result = await axios.post("http://localhost:3000/users", {
                name: this.userName,
                email: this.userEmail,
                password: this.userPassword
            });
            if (result.status === 201) {
                alert("User created");
                console.log(JSON.stringify(result.data))
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: "HomeView" });
            }
        }
    },
    components: { RouterLink }
}
</script>