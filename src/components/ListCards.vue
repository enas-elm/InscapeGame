<template>
    <div>
        <button v-on:click="pass_frequency(frequency_num)">{{ frequency_num }}</button>
    </div>
</template>

<script>
export default {
    data: function() {
       return {
        evenements:["ev1", "ev2", "ev3"] ,
        theEvent:"-",
        frequency:"1",
        isEvent:false,
        }
    },
}
</script>