import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import UploadForm from './components/UploadForm';
import imagList from './components/imagList';

Vue.config.productionTip = false
 
Vue.use(VueRouter);

  export const router=new VueRouter({
    mode:'history',
    routes:[
      {path:'/oauth2/callback', component: AuthHandler},
      {path:'/upload', component: UploadForm},
      {path:'/', component: imagList},


    ]
  });
new Vue({
  store, router,
  render: h => h(App),
}).$mount('#app')
