import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  runnersDistance: 0,
  runnersPace: 0,
  raceDistance: 0,
  raceDate: 0
}

const mutations = {
  setRaceDistance (state, distance) {
    state.raceDistance = distance
  },
  setRaceDate (state, date) {
    state.raceDate = date
  },
  setRunnersCurrentDistance (state, distance) {
    state.runnersDistance = distance
  },
  setRunnersPace (state, pace) {
    state.runnersPace = pace
  }
}
export default new Vuex.Store({
  state,
  mutations
})

// const store = new Vuex.Store({
//   state: {
//       runnersDistance: 0,
//       runnersPace: 0,
//       raceDistance: 0,
//       raceDate: 0
//   },
//   mutations: {
//     increment (state, distance) {
//       state.runnersDistance + distance;
//     }
//   }
// })
