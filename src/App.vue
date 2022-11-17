<template>
    
    <div id="nav" class="w-container">
      <router-link to="/jouer"><img id="logo" src="@/assets/img/logo.png" alt="Logo"></router-link>
      <router-link to="/">Règles</router-link>
    </div>
    <router-view/>

</template>


<style lang="scss">
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
  margin-bottom: 10px;
  font-family: 'Bungee', cursive;
  color: var(--main);
  // text-shadow: 0 0 10px #fa9339;
}

#nav{
  margin: 20px auto;
  display: flex;
  align-items: center;
  a{
    color:white;
    font-weight: 700;
    text-decoration: underline;
  }
}

#logo{
  width: 150px;
  height: auto;
}

.w-container{
  width: 80%;
  margin: 0 auto;
}

.button{
  border-radius: 40px;
  background-color: var(--main);
  color:black;
  width: fit-content;
  padding: 10px 30px;
  display: flex;
  font-weight: 600;
  float:right;
  font-size: 1.25rem;
}

a{
  text-decoration: none;
  color: black;
}

.axe-container{
    width: 50%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
  }


</style> 

  