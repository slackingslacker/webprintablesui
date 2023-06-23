import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Math from '../views/Math.vue'

import MathCount from '../views/MathCount.vue'
import MathSkipCount from '../views/MathSkipCount.vue'
import MathBoxCount from '../views/MathBoxCount.vue'
import MathSKipCountExtended from '../views/MathSKipCountExtended.vue'
import MathSkipCountRule from '../views/MathSKipCountRule.vue'

import MathExpandedForm from '../views/MathExpandedForm.vue'
import MathNumberCompare from '../views/MathNumberCompare.vue'
import MathNumberToWord from '../views/MathNumberToWord.vue'
import MathPlaceValue from '../views/MathPlaceValue.vue'
import MathNumberOrder from '../views/MathNumberOrder.vue'

import MathAddition from '../views/MathAddition.vue'
import MathSubtraction from '../views/MathSubtraction.vue'
import MathMultiplication from '../views/MathMultiplication.vue'
import MathDivision from '../views/MathDivision.vue'
import MathMultiplicationTable from '../views/MathMultiplicationTable.vue'

import MathBasicFraction from '../views/MathBasicFraction.vue'

import MathClock from '../views/MathClock.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'no-sidebar'},
    component: Home
  },
  {
    path: '/math',
    name: 'Math',
    meta: {layout: 'no-sidebar'},
    component: Math
  },
  {
    path: '/mathaddition',
    name: 'MathAddition',
    component: MathAddition
  },
  {
    path: '/mathsubtraction',
    name: 'MathSubtraction',
    component: MathSubtraction
  },
  {
    path: '/mathmultiplication',
    name: 'MathMultiplication',
    component: MathMultiplication
  },
  {
    path: '/mathdivision',
    name: 'MathDivision',
    component: MathDivision
  },
  {
    path: '/mathmultiplicationtable',
    name: 'MathMultiplicationTable',
    component: MathMultiplicationTable
  },
  {
    path: '/mathcount',
    name: 'MathCount',
    component: MathCount
  },
  {
    path: '/mathskipcount',
    name: 'MathSkipCount',
    component: MathSkipCount
  },
  {
    path: '/mathboxcount',
    name: 'MathBoxCount',
    component: MathBoxCount
  },
  {
    path: '/mathskipcountextended',
    name: 'MathSKipCountExtended',
    component: MathSKipCountExtended
  },
  {
    path: '/mathskipcountrule',
    name: 'MathSkipCountRule',
    component: MathSkipCountRule
  },
  {
    path: '/mathexpandedform',
    name: 'MathExpandedForm',
    component: MathExpandedForm
  },
  {
    path: '/mathnumbercompare',
    name: 'MathNumberCompare',
    component: MathNumberCompare
  },
  {
    path: '/mathnumbertowords',
    name: 'MathNumberToWord',
    component: MathNumberToWord
  },
  {
    path: '/mathplacevalue',
    name: 'MathPlaceValue',
    component: MathPlaceValue
  },
  {
    path: '/mathnumberorder',
    name: 'MathNumberOrder',
    component: MathNumberOrder
  },
  {
    path: '/mathbasicfraction',
    name: 'MathBasicFraction',
    component: MathBasicFraction
  },
  {
    path: '/mathclock',
    name: 'MathClock',
    component: MathClock
  },
  {
    path: '/abouts',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
