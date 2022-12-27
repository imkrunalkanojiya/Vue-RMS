<template>
  <h1>Welcome {{ currentUser }}</h1>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in restaurents" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td><RouterLink :to="'/updateresto/'+item.id">Update</RouterLink><button v-on:click="onDeleleResto(item.id)" >Delete</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: "HomeView",
    data() {
        return {
            currentUser: "",
            restaurents: []
        };
    },
    methods:{
      async onDeleleResto(id){
        const deleteResto = await axios.delete(`http://localhost:3000/restaurents/${id}`)
        if(deleteResto.status === 200){
          alert("Restaurent Deleted")
          this.$router.go(0)
        }
      }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "LoginView" });
        }
        else {
            this.$router.push({ name: "HomeView" });
            const currentUserDetails = JSON.parse(user);
            this.currentUser = currentUserDetails.name;
        }
        const result = await axios.get("http://localhost:3000/restaurents");
        this.restaurents = result.data;
    },
    components: { RouterLink }
};
</script>
