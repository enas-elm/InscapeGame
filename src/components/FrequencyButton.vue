<template>
    <div>
        <button v-on:click="pass_frequency(frequency_num)">{{ frequency_num }}</button>
    </div>
</template>

<script>
export default {
    name: 'FrequencyButton',
    props: ['frequency_num'],
    methods:{
        pass_frequency(frequency){
            this.$emit('frequency_passed', frequency)
        }
    }
}
</script>