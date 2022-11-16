<template>
    <div>


    <form>
        <label class="title" for="reponse">Ta réponse</label>
        <input class="response" name="reponse" type="text" v-model="inputResponse" placeholder="..."/>
        <div class="left">
        <div class="button-verify" v-on:click="verify(inputResponse)">Valider</div>
      </div>
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

.button-verify{
  border-radius: 40px;
  background-color: var(--main);
  color:black;
  width: fit-content;
  padding: 10px 30px;
  display: flex;
  font-weight: 500;
}

.left{

}
  
</style>