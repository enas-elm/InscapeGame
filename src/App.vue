<template>

    <div id="nav">
      <router-link to="/">Acceuil</router-link>
    </div>
    <router-view/>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200;300;400;500;600;700;800&display=swap');
:root{
  --main: #FF7600;
}

*{
  margin: 0;
  padding: 0;
  font-weight: 400;
  box-sizing: border-box;
  font-family: 'Sono', sans-serif;
}
.title{
  font-family: 'Bungee', cursive;
  color: var(--main);
}

h1{
  text-align: center;
}

body{
  margin: 50px 0px;
}
#nav{
  width: 80%;
  display: flex;
  margin: 0 auto;
}

</style> 

  