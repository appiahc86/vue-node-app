<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <post-component/>
  </div>
</template>

<script>
import postComponent from './components/postsComponent.vue'

export default {

  name: 'App',
  components: {
    postComponent
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
