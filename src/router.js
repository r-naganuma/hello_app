import Vue from 'vue'
import Router from 'vue-router'
import Home from './App.vue'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Output from '@/components/Output'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello_app',
      name: 'Top',
      component: Top
    },
	{
	  path: '/hello_app/profile',
	  name: 'Profile',
	  component: Profile
	},
	{
	  path: '/hello_app/skills',
	  name: 'Skills',
	  component: Skills
	},
	{
	  path: '/hello_app/outputs',
	  name: 'Output',
	  component: Output
	}
  ]
})