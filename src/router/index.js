import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Skills from '@/components/Skills'
import Biography from '@/components/Biography'
import Movie from '@/components/Movie'

import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Skills',
      component: Skills
    },
    {
      path: '/Biography',
      component: Biography
    },
    {
      path: '/Movie',
      component: Movie
    },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/page3',
      component: page3
    }
  ]
})
