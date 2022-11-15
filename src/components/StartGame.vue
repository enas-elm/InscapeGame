<template>
    <div class="container">

    <div class="flex">
        <p class="select">CREATE</p>
        <p class="select">JOIN</p>
    </div>

        <form action="" method="get">
            <input type="text" name="name" placeholder="Enter your name" class="select"> 
            <button type="submit" class="select">Create a room</button>
        </form>


    </div>
</template>

<style lang="scss" scoped>
    .select{
            padding:1rem 2rem;
            font-weight: 500;
            width: 100%;
    }

    .container{
        border: 1px solid var(--color-light-gray);
        width: 100%;
        text-align: center;
        margin: 0 auto;
    }
    
    .flex {
            justify-content: center;

        p{
            background-color: var(--color-light-gray);
            color: var(--color-black);
        }
    }

    form{
        padding: 20px;
        gap: 10px;
        display: flex;
        flex-direction: column;
         input[type="text"] {
            width: 100%;
            background-color: var(--color-light-gray);
        }
        button{
            background-color: var( --color-light-green);
        }
    }

</style>

<script>
    export default {
        name: 'StartGame',
    }
</script>