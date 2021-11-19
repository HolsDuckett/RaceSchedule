<template>
  <div class="Welcome">
    <h1>Welcome to Get Your Running Arse In Gear 🏃🏻‍♀️</h1>
    <h2>Info about the application</h2>
    <button @click="beginJourney('/race-distance')">Lets get started</button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    beginJourney (nextPage) {
      this.$router.push(nextPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  padding: 0.35em 1.2em;
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
