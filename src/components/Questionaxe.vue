<template>
    <div>

    <p v-bind:question="question">{{question}}</p>
    <form>
        <input name="msg" type="text" v-model="inputResponse" />
        <div v-on:click="verify(inputResponse)">Valider</div>
    </form>

    <p>{{message}}</p>
    <p>{{counter}}</p>
    </div>
</template>



<script>

export default {
name:'Question',
data() {
  return {
    counter: 0,
    message:"",
  }
},
props: {
  question: String,
  reponse: String,
},
methods: {
  verify(inputResponse){
    if (inputResponse == this.reponse) {
      this.message = "Bonne réponse";
      this.counter++;
    }
    else{
      this.message = "Réessaie"
    }
  },

},

}

</script>