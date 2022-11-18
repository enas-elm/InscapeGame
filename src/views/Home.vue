<template>
    <div class="all bg-rules">
    <div id="nav" class="w-container">
      <router-link to="/jouer"><img id="logo" src="@/assets/img/logo.png" alt="Logo"></router-link>
      <router-link to="/">Règles</router-link>
    </div>

    <div class="flex w-container gap " >
        <!-- :style="{'background-image':'url(src/assets/img/bg-rules.jpg)'}" -->
        <img class="home-img" src="src/assets/img/perso.png" alt="Image">
        <div>
            <h1 class="title">IIMSCAPE GAME</h1>
            <p>Bonjour et bienvenue à l’IIM, je suis super H’IIM qui vous guidera tout le long de votre mission. Vous êtes un jeune étudiant aspirant à travailler dans le monde du digital. 5 bracelets sont cachés au sein de l’école, vous avez donc une seule mission : obtenir ces bracelets en découvrant les différents axes qui vous permettront d’en sortir en véritable super héros du digital.</p>
                <div class="center">
                    <router-link class="button play" to="/jouer">Jouer</router-link>
                </div>
        </div>

    </div>
</div>
</template>


<style lang="scss">

.center{
    justify-content: center;
    display: flex;
    max-width: 0 auto;
}
.play{
    float: none;
    margin-top: 20px;
}
.home-img{
    width: 15%;
    height: auto;
}
.gap{
    width:80%;
    gap: 20%;
}
// body{
//   background:  url("src/assets/img/bg-rules.jpg") no-repeat bottom fixed ;
//   background-size: 100%;
  
// //   filter: grayscale(100%);
// //  
// }
.bg-rules{
    background: url("src/assets/img/bg-rules.jpg") no-repeat bottom fixed ;
   background-size: cover;
}
</style>