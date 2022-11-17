<template>

  <div >
    <h1 class="title">Création & Design</h1>
    <h2 class="title axe-container">Mission 2</h2>
    <p class="axe-container">{{question}}</p>
    <p class="axe-container help" v-if="help==true">{{indice}}</p>

    <div class="cd-select">
      <div class="personnages">
        <div class="cd-perso">
          <img src="src/assets/img/perso1.png" alt="Personnage">
          <input type="radio" id="one" value="one" v-model="picked" />
          <label for="one">Un</label>
        </div>

        <div class="cd-perso">
          <img src="src/assets/img/perso2.png" alt="Personnage">
          <input type="radio" id="two" value="two" v-model="picked" />
          <label for="two">Deux</label>
        </div>
      </div>

      <div v-if="correct==false">
        <div class="button" v-on:click="verifyCd(picked)">Valider</div>
      </div>
    </div>

    <Success v-if="correct==true"/>
  </div>

</template>

<script>
import Success from '@/components/Success.vue' 

export default{
components:{
  Success
},
  props: {
    counter: Number,
},
  data(){
    return{
      question:"Un allié a besoin de votre emplacement exacte pour vous envoyer un colis qui vous aidera Un QR Code est caché dans l’école… cegrgtr grg re vhiebhib er zhibeviebvi eviebiv eijv eizbviebgviuebgoer",
      reponse: "one",
      indice:"Indice cd",
      axeImg:"deeeev",
      picked: '',
      help: false,
      correct: false,
    }
  },
  methods:{
        verifyCd(){
          if(this.picked == this.reponse){
            this.correct=true;
          }
          else{
            this.help = true;
          }
        }
    }
}
</script>

<style lang="scss">

body {
  background-color: black; 
  // background: url('src/assets/img/bg-dev.png') no-repeat center fixed ;
  color:white;
  justify-content: center;
}

.cd-select{
  width: 50%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}

.personnages{
  display: flex;
  justify-content: space-between;
  .cd-perso{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  img{
    height: 300px;
  
  }
}
}

.help{
margin-top: 20px;
}

</style>

