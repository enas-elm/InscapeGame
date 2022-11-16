<template>
    <div class="success-bg">
        <div class="success-div">
            <img src="@/assets/img/tlou.jpg" alt="">
            <div>
                <p class="txt">Mission</p>
                <p class="reussie">Réussie</p>
                <p class="txt">Tu as obtenu ton bracelet</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.success-bg{
    background: rgb(255, 255, 255, 0.2) ;
    line-height: 1.2;
    display: flex;
    align-items: center;
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
}
.txt{
    color: white;   
    font-family: 'Bungee', cursive;
    font-size: 2rem;
}
.reussie{
    font-family: 'Bungee', cursive;
    color: var(--main);
    font-size: 4rem;
}

</style>