<template>
  <div>
    <h1>Condo lights</h1>
    <ul>
      <li v-for="light in lights">
        {{ light.name }} : 
        <button class="light-switch-button" v-if="light.state === 0 " v-on:click="switchLight(light.uid)">ON</button>
        <button class="light-switch-button" v-if="light.state === 1 " v-on:click="switchLight(light.uid)">OFF</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LightSwitch',
  methods: {
    switchLight: function (uid) {
      const toggleUID = process.env.SOCKET_SERVER + '/?uid=' + uid
      axios.get(toggleUID).then(response => {
        this.lights = response.data
      })
    }
  },
  data () {
    return {
      lights: [],
      errors: []
    }
  },

  // Fetches lights when the component is created.
  created () {
    axios.get(process.env.SOCKET_SERVER)
    .then(response => {
      // JSON responses are automatically parsed.
      this.lights = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>


<style>
button.light-switch-button {
  height:50px;
  width: 60px;
  background-color: 'white';
  border: 1 solid black;
}
</style>
