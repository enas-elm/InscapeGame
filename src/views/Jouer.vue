
<template>

  <div class="w-container">
    <h1 class="title">A toi de jouer !</h1>

    <div class="flex">

      <div>
        <div class="axe-list" v-for="axe in axes" v-bind:key="axe.id" v-on:click="chosenAxe(axe.id)" >
          <img  :src='`src/assets/img/${axe.img}`' alt="">
          <p>{{axe.name}}</p>
        </div>
      </div>

      <img src="src/assets/img/tlou.jpg" alt="Jeu">
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
    axes: [
      {id:1, name:"Création & Design", img:"cd.png"},
      {id:2, name:"Coding & Digital Innovation", img:"cd.png"},
      {id:3, name:"Animation 3D", img:"cd.png"},
      {id:4, name:"Communication Digitale & E-Business", img:"cd.png"},
      {id:5, name:"jeux Vidéos", img:"cd.png"},
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
    this.selected = axeId
    console.log(axeId)
    if(axeId==1){
      window.location.href = 'axedev';
    }
    else if(axeId==2){
      window.location.href = 'axedev';
    }
    else if(axeId==3){
      window.location.href = 'axe3d';
    }
  }

},
}

</script>


<style lang="scss">
.flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  gap: 50px;
  align-items: center;
  img:nth-child(2){
    width: 50%;
    height: 50%;
  }
}
.axe-list{
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
