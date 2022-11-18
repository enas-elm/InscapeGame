<template>
    <div>

    <div  v-if="correct==false">
    <h1 class="title">{{title}}</h1>
    <h2 class="title axe-container">Mission {{id}}</h2>
    <p class="axe-container">{{question}}</p>
    <form class="axe-container">
        <label class="title" for="reponse">Ta réponse</label>
        <p v-if="help==true">{{indice}}</p>
        <input class="response" name="reponse" type="text" v-model="inputResponse" placeholder="..."/>
        <div class="left">
        <div>
          <div  class="button " v-on:click="verify(inputResponse)">Valider</div>
        </div>

      </div>
    </form>
  </div>
    <Success v-if="correct==true" v-bind:bracelet="bracelet"/>
    </div>
</template>



<script>
import Success from '@/components/Success.vue' 
export default {
name:'Question',
components:{
  Success
},
data() {
  return {
    help: false,
    correct: false,
  }
},
props: {
  id: Number,
  title: String,
  question: String,
  reponse: String,
  indice: String,
  bracelet: String,
},
methods: {
  verify(inputResponse){
    if (inputResponse.trim().toLowerCase() == this.reponse.trim().toLowerCase()) {
      // window.location.href = 'success';
      this.correct=true;
      // this.help = false;
      // this.$emit("message", "I changed the message");
    }
    else{
      this.help = true;
    }
  },

},

}

</script>

<style lang="scss">

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  background-color: black;
  color: white;
  border-radius: 40px;
  border: 2px solid var(--main) !important;
  transition: all 0.1s ease-out;
  &:hover {
    box-shadow: 0 0 10px var(--main) ;
  }
  &:focus {
    box-shadow: 0 0 20px var(--main) ;
  }
}



  
</style>