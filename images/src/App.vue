<template>
  <div>
  app view
    <img alt="Vue logo" src="./assets/logo.png">
  <AppHeader></AppHeader>
  <div class="ui container"> <router-view></router-view>
  </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
