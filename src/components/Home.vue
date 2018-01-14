<template>
  <div>
    <h4 v-if="authenticated">
        <LightSwitch />
    </h4>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
  </div>
</template>

<script>
  import LightSwitch from './LightSwitch'

  export default {
    name: 'home',
    props: ['auth', 'authenticated'],
    components: {
      LightSwitch
    }
  }
</script>

<style>
  a {
    cursor: pointer;
  }
</style>

