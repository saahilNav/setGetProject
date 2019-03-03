<template>
  <div class="ui secondary pointing menu">
  <router-link   to="/" class="active item">
    ImageStorage
  </router-link >
  {{isLoggedIn}}
  <div   class="right menu" >
  <div v-if="isLoggedIn" class="horizontal">
  <router-link  to="/">Glaleries button</router-link>
   <router-link to="/upload">upload button </router-link>
   <a class="item" @click="logOut">LogOut</a>
  </div>
    <a  v-else href='#' class="ui item" @click=" login">
      Login
    </a>
  </div>
</div>

</template> 

<script>
import{mapActions,mapGetters} from 'vuex';
export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods:mapActions(['login','logOut'])

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.horizontal{
  display:flex;
  flex-direction:row;
}
a {
  color: #42b983;
}
</style>
