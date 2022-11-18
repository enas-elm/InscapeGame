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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nunc vitae tortor malesuada tempus. 
                Aliquam et lectus vitae dui congue vulputate. Aenean venenatis eros id volutpat suscipit. Vestibulum at consectetur sapien.
                Aliquam laoreet ex sapien, sed porttitor tortor sodales eu. In quis tellus tempor, laoreet libero et, ultricies purus. 
                Cras vehicula est sed neque mattis gravida. Pellentesque at velit non enim bibendum accumsan. Fusce malesuada viverra malesuada. 
                Praesent a erat vehicula risus elementum volutpat. Vivamus lacinia scelerisque dolor, et aliquet sem suscipit quis.
                Vivamus eget suscipit justo, nec sollicitudin sem. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
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