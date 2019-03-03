import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false
import search from './components/search.vue'
import addBuddy from './components/addBuddy.vue'
import optioSelect from './components/optioSelect.vue'


import VueRouter from 'vue-router'
import Vuex from 'vuex'

import axios from 'axios'
Vue.use(axios)
Vue.use(VueRouter)
Vue.use(Vuex);

  export const router=new VueRouter({
    mode:'history',
    routes:[
      {path:'/', component:search},

      {path:'/search', component:search},
       {path:'/addBuddy', component:addBuddy},
       {path:'/optioSelect' , component:optioSelect}

    ]
  });
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

