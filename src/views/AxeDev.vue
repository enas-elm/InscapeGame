<template>
<div class="all bg-dev">
        <div id="nav" class="w-container">
      <router-link to="/jouer"><img id="logo" src="@/assets/img/logo.png" alt="Logo"></router-link>
      <router-link to="/">Règles</router-link>
      </div>
  <div >
    <Questionaxe v-bind:id="id" v-bind:title="title" v-bind:question="question" v-bind:reponse="reponse" v-bind:indice="indice" v-bind:bracelet="bracelet"/> 
  </div>
</div>
</template>

<script>
import Questionaxe from '@/components/Questionaxe.vue' 
import Success from '@/components/Success.vue' 
export default{
  components: {
    Questionaxe,
    Success
  },
  props: {
    counter: Number,
},
  data(){
    return{
      id: 3,
      title:"Coding & Digital Innovation",
      question:"Un allié souhaIte vous envoyer un Présent qui vous sera d'une aide précieuse. Communiquer lui votre adresse.",
      reponse: "89.30.29.68",
      indice:"Indice: Rechercher votre Adresse IP",
      bracelet:"bracelet_dev.png",
    }
  },
  // methods: {
  //   setMessage(msg) {
  //               this.msg = msg;
  //           }
  //       }
}
</script>

<style lang="scss">
.bg-dev{
  // background-image:;
   background: url("src/assets/img/bg-dev.png") no-repeat center fixed ;
   background-size: cover;
}
body {
  background-color: black; 
  // background: url('src/assets/img/bg-dev.png') no-repeat center fixed ;
  color:white;
  justify-content: center;
}

</style>

