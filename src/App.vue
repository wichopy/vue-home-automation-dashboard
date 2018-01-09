<template>
  <div id="app">
    <LightSwitch />
  </div>
</template>

<script>
import LightSwitch from './components/LightSwitch'

export default {
  name: 'app',
  components: {
    LightSwitch
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
