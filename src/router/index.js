import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RaceDistance from '@/components/RaceDistance'
import RaceDate from '@/components/RaceDate'
import RunnersDistance from '@/components/RunnersDistance'
import RunnersPace from '@/components/RunnersPace'
import RunningSchedule from '@/components/RunningSchedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/race-distance',
      name: 'RaceDistance',
      component: RaceDistance

    }, {
      path: '/race-date',
      name: 'RaceDate',
      component: RaceDate

    }, {
      path: '/runners-distance',
      name: 'RunnersDistance',
      component: RunnersDistance

    }, {
      path: '/runners-pace',
      name: 'RunnersPace',
      component: RunnersPace

    }, {
      path: '/running-schedule',
      name: 'RunningSchedule',
      component: RunningSchedule

    }
  ]
})
