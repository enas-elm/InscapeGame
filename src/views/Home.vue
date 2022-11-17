<template>
    <div class="flex w-container">
        <div>
            <h1>IIMSCAPE GAME</h1>
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
        <img src="src/assets/img/tlou.jpg" alt="Image">
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
</style>