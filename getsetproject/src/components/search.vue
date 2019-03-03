<template>
  <div>
    <h1>hi am search box</h1>
 <div>
   <!-- {{getaddBuddyItem}} -->
{{addbudySearchA}}
 <buddyItem  :objItem="addbudySearchA"/>
    
 </div>

  <!-- <div  v-for="obj in addbudySearchA"> -->
    <!-- <buddyItem  :objItem="addbudySearchA"/>
     -->
  <!-- </div> -->


  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import buddyItem from './buddyItem.vue' ;
export default {
  name:"search",

components:{
   buddyItem
  },
  computed:{
    ...mapGetters(['getaddBuddyItem']),

   addbudySearchA:{

  get: function() {
        return this.$store.state.budyItem;
      }
      ,
      set: function(value) {
        return this.$store.dispatch("addBuddyItem", value);
      }
   },

   flgObjectEdited: {
     get:function() {
        return this.$store.state.flgObjectEdited;
      },
      set: function(value) {
        return this.$store.dispatch("flgObjectEdited", value);
      }
   },
   flgShowCloseBtn: {
     get:function() {
        return this.$store.state.flgShowCloseBtn;
      },
      set: function(value) {
        return this.$store.dispatch("flgShowCloseBtn", value);
      }
   }
  },
  methods:{
     addbudyItemz(){
       this.$store.dispatch('addBuddyItem');
      //  this.$store.dispatch("flgShowCloseBtn")
     }
  },
  // mounted(){

  //   if(this.$store.state.flgShowCloseBtn){
  //          this.addbudyItemz();

  //   }
  //}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
