<template>

  <div class="container" >
    <h1 class="title">Coding & Digital Innovation</h1>
    <h2 class="title">Mission 2</h2>
    <p>{{question}}</p>
    <Questionaxe v-bind:reponse="reponse" v-bind:indice="indice" />
    <!-- <Questionaxe v-bind:reponse="reponse" v-bind:indice="indice"  @message="setMessage"/> -->
    
  </div>
<!-- {{msg}} -->
  <!-- <Success   v-bind:axeImg="axeImg"/> -->
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
      question:"Un allié a besoin de votre emplacement exacte pour vous envoyer un colis qui vous aidera Un QR Code est caché dans l’école… cegrgtr grg re vhiebhib er zhibeviebvi eviebiv eijv eizbviebgviuebgoer",
      reponse: "A",
      indice:"Indice dev",
      axeImg:"deeeev",
      counter: 0,
      msg: "zzzzz"
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
.container{
    width: 50%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
  }

</style>

