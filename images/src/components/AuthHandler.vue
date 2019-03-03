
<template>
<div>
pleas waitygb
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default{
    name:'AuthHandler',
    methods:mapActions(['finalizeLogin']),
    created(){
        this.finalizeLogin(window.location.hash);
  alert("created",window.location.hash);
  
    }
}
</script>
<style>
</style>