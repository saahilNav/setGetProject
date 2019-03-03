<template>
        
    <div>
        <ul>
            <li>{{$route.params.id}}
</li>
        </ul>
     
<div>{{news.title}}</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    
    name:'details',
    data(){
        return{
            news:{},
        }
    },

//         fetchDatId:{
//             get: function(id) {
//         return this.$store.state.postList(+$route.params.id);
//       },
//       set: function(value) {
//         return this.$store.dispatch("fetchDatI", value);
//       }
//    }
        
//     }
   
//     methods:{
//         fetchId(){

//       this.news=  this.$store.getters.getFetchDatId(+$route.params.id);
//         }
//     },

//   created(){
//         this.fetchId();
//     },
   }
</script>

<style>

</style>
