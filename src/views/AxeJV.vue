<template>

  <div >
    <Questionaxe v-bind:id="id" v-bind:title="title" v-bind:question="question" v-bind:reponse="reponse" v-bind:indice="indice" v-bind:bracelet="bracelet"/> 
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
      id: 2,
      title:"Jeux vidéos",
      question:"Un allié a besoin de votre emplacement exacte pour vous envoyer un colis qui vous aidera Un QR Code est caché dans l’école… cegrgtr grg re vhiebhib er zhibeviebvi eviebiv eijv eizbviebgviuebgoer",
      reponse: "A",
      indice:"Indice dev",
      bracelet:"bracelet_JV.png",
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

body {
  background-color: black; 
  // background: url('src/assets/img/bg-dev.png') no-repeat center fixed ;
  color:white;
  justify-content: center;
}

</style>

