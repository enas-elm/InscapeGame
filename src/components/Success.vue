<template>
    <div class="success-bg">
        <div class="success-div">
            <img :src='`src/assets/img/${bracelet}`' alt="Bracelet">
            <div>
                <p class="txt">Mission</p>
                <p class="reussie">Accomplie</p>
                <p class="txt">Tu as obtenu ton bracelet</p>

            </div>
        </div>
        <hr>
    </div>
    <div class="w-container axe-container-right">
        <router-link to="/jouer" class="button">Continuer</router-link>
    </div>

</template>


<script>
export default{
    name: 'Success',
    data(){
        return{
            response: '',
        }
    },
    props: {
     bracelet: String,
},
}
</script>
<style lang="scss" scoped>
.success-bg{
    // transform: rotate(-5deg);
    line-height: 1.2;
    display: flex;
    align-items: center;
    margin-top: 10vh;
    // top:50vh;
    max-width: 100%;
    img{
        border-radius: 100%;
        height: 300px;
        width: 300px;
    }
    .success-div{
        padding: 0 20%;
        line-height: 1.2;
        display: flex;
        align-items: center;
        gap:50px;
    }
    .txt{
    color: white;   
    font-family: 'Bungee', cursive;
    font-size: 2rem;
    }
    .reussie{
        font-family: 'Bungee', cursive;
        color: var(--main);
        font-size: 5rem;
    }
    hr{
        position:absolute;
        width: 100%;
        border: 8rem solid rgba(108, 108, 108, 0.5);
        z-index: -1;
    }
}
.left{
    margin-top: 20px;
    float: left;
}
.axe-container-right{
    width: 50%;
    margin: 0 auto;
    flex-direction: column;
}

</style>