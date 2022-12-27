<template>
    <div>
        <RouterLink to="/">Home</RouterLink><br/>
        <RouterLink to="/addresto">Add Restaurent</RouterLink><br />
        <a v-on:click="onSignOut">Logout</a>
        
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';



export default {
    name: "HeaderView",
    methods: {
        onSignOut() {
            let user = localStorage.getItem('user-info')
            if(user){
                localStorage.clear("user-info");
                alert("Logout Succesfully");
                this.$router.push({ name: "LoginView" });
            }   
        }
    },
    components: { RouterLink }
}
</script>