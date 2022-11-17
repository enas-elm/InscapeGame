<template>
    <div>


    <form class="axe-container">
        <label class="title" for="reponse">Ta réponse</label>
        <p v-if="help==true">{{indice}}</p>
        <input class="response" name="reponse" type="text" v-model="inputResponse" placeholder="..."/>
        <div class="left">
        <div v-if="correct==false">
          <div  class="button " v-on:click="verify(inputResponse)">Valider</div>
        </div>

      </div>
    </form>

    <Success v-if="correct==true" v-bind:axeImg="axeImg"/>
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
  reponse: String,
  indice: String,
},
methods: {
  verify(inputResponse){
    if (inputResponse == this.reponse) {
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
  &:focus {
    border: 2px solid var(--main) !important;
  }
}


.left{

}
  

  
</style>