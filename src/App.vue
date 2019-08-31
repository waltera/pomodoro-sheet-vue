<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-alert show>Teste</b-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
