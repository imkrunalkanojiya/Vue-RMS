<template>
    <h1>Update Restaurent</h1>
    <div>
        <input type="text" placeholder="Enter name" v-model="restoName"><br/><br />
        <textarea placeholder="Enter address" v-model="restoAddress" /><br/><br />
        <input type="number" placeholder="Enter number" v-model="restoNumber"><br/><br />
        <button v-on:click="onRestoSubmit">Update</button>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name:"UpdateRestoView",
    data(){
        return{
            restoName:"",
            restoAddress:"",
            restoNumber:"",
            currentRestoID:""
        }
    },
    methods:{
        async onRestoSubmit(){
            const updateRestoData = await axios.put(`http://localhost:3000/restaurents/${this.currentRestoID}`,{
                name:this.restoName,
                address:this.restoAddress,
                contact:this.restoNumber
            })
            if(updateRestoData.status === 200){
                this.$router.push({ name: "HomeView" });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "LoginView" });
        } 
        this.currentRestoID = this.$route.params.id
        
        const getRestoData = await axios.get(`http://localhost:3000/restaurents?id=${this.currentRestoID}`)
        if(getRestoData.status === 200){
            this.restoName = getRestoData.data[0].name
            this.restoAddress = getRestoData.data[0].address
            this.restoNumber = getRestoData.data[0].contact
        }
    }
}
</script>