<template>
<div>
    <buddyItem  v-for="buddyobj1 in getFetchData" :key="buddyobj1.id" :buddyobj="buddyobj1"/>
    </div>
</template>

<script>
import buddyItem from './buddyItem.vue' ;
import { mapGetters } from 'vuex';
export default {
name:'addBuddy',
components:{
   buddyItem
  },
computed:{
...mapGetters(['getFetchData']),
  postData:{
   get: function() {
        return this.$store.state.postList;
 },
  set: function(value) {
    return this.$store.dispatch("fetchDataFrmApi", value);
 }
   }
  },
  methods:{
     fetchDat(){
       this.$store.dispatch('fetchDataFrmApi');
     },
    
  },
//   mounted(){
// this.fetchDat();
//   }

}
</script>

<style>

</style>
 