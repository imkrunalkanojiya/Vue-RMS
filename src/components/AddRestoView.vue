<template>
    <h1>Add Restaurent</h1>
    <div>
        <input type="text" placeholder="Enter name" v-model="restoName"><br/><br />
        <textarea placeholder="Enter address" v-model="restoAddress" /><br/><br />
        <input type="number" placeholder="Enter number" v-model="restoNumber"><br/><br />
        <button v-on:click="onRestoSubmit">Submit</button>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name:"AddRestoView",
    data(){
        return{
            restoName:"",
            restoAddress:"",
            restoNumber:""
        }
    },
    methods:{
        async onRestoSubmit(){
            const result = await axios.post(`http://localhost:3000/restaurents`,{
                name:this.restoName,
                address:this.restoAddress,
                contact:this.restoNumber
            })
            if (result.status === 201) {
                alert("Restaurent Data Added");
                this.$router.push({ name: "HomeView" });
            }   
        }
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LoginView" });
    } 
  }
}
</script>