
<template>
        <div class="all bg-jouer">
        <div id="nav" class="w-container">
      <router-link to="/jouer"><img id="logo" src="@/assets/img/logo.png" alt="Logo"></router-link>
      <router-link to="/">Règles</router-link>
      </div>
  <div class="w-container">
    <h1 class="title">DEVIENS LE HÉROS DE L’ÈRE DU DIGITAL</h1>
    <div class="flex">

      <div>
        <div class="axe-list " v-for="axe in axes" v-bind:key="axe.id" v-on:click="chosenAxe(axe.id)"  :class="{ 'axe-select' : counter === axe.id || counter > 5 }" >
          <img    :src='`src/assets/img/${axe.img}`' alt="">
          <p>{{axe.name}}</p>
        </div>
      </div>

      <img  v-on:click="turn(counter)" v-if="counter <=5" class="axes-img" :src='`src/assets/img/${sceneImg}`' alt="Jeu">
      <video  v-if="counter >5" class="axes-img" autoplay src="src/assets/img/porte.mp4"></video>
      
  </div>
  </div>
</div>
</template>

<script>

export default {
name: 'App',
data() {
  return {
    counter: 1,
    sceneImg:"rendu1.png",
    axes: [
      {id:1, name:"Création & Design", img:"cd.png"},
      {id:2, name:"Jeux Vidéos", img:"jv.png"},
      {id:3, name:"Coding & Digital Innovation", img:"cdi.png"},
      {id:4, name:"Animation 3D", img:"3d.png"},
      {id:5, name:"Communication Digitale & E-Business", img:"cdeb.png"},
    ],
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
      window.location.href = 'axecd';
    }
    else if(axeId==2){
      window.location.href = 'axejv';
    }
    else if(axeId==3){
      window.location.href = 'axedev';
    }
    else if(axeId==4){
      window.location.href = 'axe3d';
    }
    else if(axeId==5){
      window.location.href = 'axecdeb';
    }
  },
  turn(turn){
    this.counter++;
    if(turn==1){
     this.sceneImg="rendu2.png";
    }
    else if(turn==2){
      this.sceneImg="rendu3.png";
    }
    else if(turn==3){
      this.sceneImg="rendu4.png";
    }
    else if(turn==4){
      this.sceneImg="rendu5.png";
    }
    else if(turn==5){
      this.sceneImg="rendu6.png";
    }
  }

},
}

</script>


<style lang="scss" scoped>
.axe-select {
  cursor:pointer;
  opacity: 1 !important;

  p{
    transition: all 0.2s ease-out;
  }
  &:hover{
    p{
    font-size: 1.75rem;
  }
    img {
    width: 2.75rem;
  }}
}
.axes-img{
  border:solid #fa9339 1px;
    box-shadow: 0 0 15px var(--main);
    border-radius: 8px;
    width: 50%;
    height: 100%;
}
.axe-list{
  display: flex;
  align-items: center;
  gap: 20px;
  opacity: 0.5;
  margin: 15px auto;
  font-size: 1.5rem;

  img {
    width: 2.5rem;
    height: auto;
    transition: all 0.2s ease-out;
  }
}
body {
  background-color: #f5f5f5 ;
}

.bg-jouer{
  background: url("src/assets/img/bg-rules.png") no-repeat center fixed ;
   background-size: contain;
}

</style>
