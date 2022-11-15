
<template>

<div>
  <p>{{counter}}</p>

  <br><br>

  <div v-for="axe in axes" v-bind:key="axe.id" v-on:click="chosenAxe(axe.id)" >
    {{axe.name}}
  </div>
  <p>selected: {{selected}}</p>

<div>
  <form>
    <input name="msg" type="text" v-model="msg" />
    <div v-on:click="verify(msg)">Valider</div>
  </form>

  <p>
    {{response}}
  </p>
</div>


</div>
</template>

<script>

import CreationDesign from '@/components/CreationDesign.vue'
import DevWeb from '@/components/DevWeb.vue'
export default {
name: 'App',
components: {
  CreationDesign,
  DevWeb,
},
data() {
  return {
    counter: 0,
    msg: "",
    response: "Entrez votre réponse",
    selected: '',
    axes: [
      {id:1, name:"crea", question:"Question créa", reponse:"1"},
      {id:2, name:"dev", question:"Question dev", reponse:"2"},
      {id:3, name:"3d", question:"Question 3d", reponse:"3"},
    ]
  }
},
methods: {
  verify(msg){
    if (msg == "lol") {
      this.response = "Bonne réponse";
      this.counter++;
    }
    else{
      this.response = "Réessaie"
    }
  },
  chosenAxe(axeId){
    if(axeId==1){
      window.location.href = 'axecd';
    }
    else if(axeId==2){
      window.location.href = 'axedev';
    }
    else if(axeId==3){
      window.location.href = 'axetroisd';
    }
  }



},



}
</script>


