<template>

  <div class="container">
    <h1 class="title">Coding & Digital Innovation</h1>
    <h2 class="title">Mission 2</h2>
    <p>{{question}}</p>
    <Questionaxe v-bind:reponse="reponse"/>
  </div>

</template>

<script>
import Questionaxe from '@/components/Questionaxe.vue' 
export default{
  components: {
    Questionaxe
  },
  data(){
    return{
      question:"Un allié a besoin de votre emplacement exacte pour vous envoyer un colis qui vous aidera Un QR Code est caché dans l’école… cegrgtr grg re vhiebhib er zhibeviebvi eviebiv eijv eizbviebgviuebgoer",
      reponse: "A",
    }
  }
}
</script>

<style lang="scss">

body {
  background-color: black;
  color:white;
  justify-content: center;

  .container{
    width: 50%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
  }
}
</style>

