<template>
  <div class="Welcome">
    <h1>RUNNING SCHEDULE 🏃🏻‍♀️💨</h1>
    <ul>Your current comfortable distance: {{ runnersDistance }} KM</ul>
    <ul>Your current pace: {{ runnersPace }} KM/H</ul>
    <ul>Race Date: {{ raceDate }}</ul>
    <ul>Race Distance: {{ raceDistance }} KM</ul>
    <div>
    <h3>THIS WILL BE A RUNNING SCHEDULE - TBC</h3>
    </div>
    <button @click="nextPage('/')">Home</button>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'RunningSchedule',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      runnersDistance: state => state.runnersDistance,
      runnersPace: state => state.runnersPace,
      raceDistance: state => state.raceDistance,
      raceDate: state => state.raceDate
    })
  },
  methods: {
    nextPage (page) {
      this.$router.push(page)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  display:inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #FFFFFF;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
  color: #FFFFFF;
  text-align: center;
  transition: all 0.2s;
  background-color:#ea752c;
}
button:hover {
color: #000000;
background-color: #e5d9d2;
}
</style>
