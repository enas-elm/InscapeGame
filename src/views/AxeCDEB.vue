<template>
   <div class="axe-container" >
    <h1 class="title">Communication Digitale & E-Business</h1>
    <h2 class="title">Mission 2</h2>
    <p>{{question}}</p>
    <Questionaxe v-bind:reponse="reponse" v-bind:indice="indice" />    
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

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
      question:"Un allié a besoin de votre emplacement exacte pour vous envoyer un colis qui vous aidera Un QR Code est caché dans l’école… cegrgtr grg re vhiebhib er zhibeviebvi eviebiv eijv eizbviebgviuebgoer",
      reponse: "C",
      indice:"Indice cdeb",
      axeImg:"deeeev",
      counter: 0,
      msg: "zzzzz"
    }
  },
}
</script>

