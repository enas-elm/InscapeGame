<template>
  <div>
    <h1>Coding & Digital Innovation </h1>

    <Questionaxe v-bind:question="question" v-bind:reponse="reponse"/>
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
      question:"Un allié a besoin de votre emplacement exacte pour vous envoyer un colis qui vous aidera",
      reponse: "A",
    }
  }
}
</script>

