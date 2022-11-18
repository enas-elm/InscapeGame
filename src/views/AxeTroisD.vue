<template>
<div class="all bg-troisd">
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
      id: 4,
      title:"Animation 3D",
      question:"Trouve le code dans la scène",
      reponse: "3dissocool",
      indice:"Réessaie",
      bracelet:"bracelet_3D.png",
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
.bg-troisd{
  // background: url("src/assets/img/bg-dev.png") no-repeat center fixed ;
   background-size: cover;
}
body {
  background-color: black; 
  // background: url('src/assets/img/bg-dev.png') no-repeat center fixed ;
  color:white;
  justify-content: center;
}

</style>

