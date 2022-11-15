<template>
 
    <div class="info">
        <p>{{info}}</p>
        <p v-if="role == 'count'">{{varTurnCount}}</p>

        <div v-if="isEvent === false">
            <p>CALM BEFORE THE STORM</p>
            <p>Nothing happens</p>
        </div>

        <div v-if="isEvent === true">
            <p class="bigger-size">{{varTurnCount}}</p>
            <p>description !!!</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .info{
        border: 1px solid var(--color-light-green);
        width: fit-content;
        padding: 10px;
        margin: 2rem auto;
        text-align: center;
        p{
            color: var(--color-light-green);
            font-size: 1.25rem;
        }
        .bigger-size{
            font-size: 2rem;
        }
    }
    

</style>

<script>
    export default {
        name: 'InfoBlock',
        props: ['info','varTurnCount','isEvent', 'role']
    }
</script>