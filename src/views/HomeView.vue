
<template>

<div>
  <p>{{counter}}</p>

  <br><br>

  <div v-for="axe in axes" v-bind:key="axe.id" v-on:click="chosenAxe(axe.id)" >
    {{axe.name}}
  </div>
  <p>selected: {{selected}}</p>

<div>
  <form>
    <input name="msg" type="text" v-model="msg" />
    <div v-on:click="verify(msg)">Valider</div>
  </form>

  <p>
    {{response}}
  </p>
</div>


</div>
</template>

<script>

import CreationDesign from '@/components/CreationDesign.vue'
import DevWeb from '@/components/DevWeb.vue'
export default {
name: 'App',
components: {
  CreationDesign,
  DevWeb,
},
}
</script>


