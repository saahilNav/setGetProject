<template>
<div >
  <div v-if="buddyobj">
    <ul style="list-style-type:none">
    <li style="list-style-type: none;" >{{buddyobj.name}}</li> 
    <li>{{buddyobj.tittle}}</li>
</ul>
    <button @click="addBuddyItem">AddBudy</button>
    </div>
   <!-- <p>{{objItem}}</p> -->
 <!-- <div v-if="flgShowC">{{obj.name}}</div>
    </div> -->
</template>

<script>
export default {
name:'buddyItem',
props:['buddyobj','objItem'],
data(){
  return{
    flgShowC:false,
    buddyobjCopy:{},
  }
},
computed:{
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
     addBuddyItem(){
       let len1=this.buddyobj.length;
       console.log("len1",len1)
       this.buddyobjCopy=Object.assign({},this.buddyobj)
       this.$store.dispatch('addBuddyItem',this.buddyobjCopy);
       this.flgShowC=true;

     }
}
}
</script>

<style>

</style>
