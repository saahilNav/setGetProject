import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import api from '../api/index1'
// import api from '../../api/imgur';
Vue.use(Vuex);
export const store = new Vuex.Store({
   state: {

      flgShowTextArea: false,
      flgShowCloseBtn: false,
      flgObjectEdited: false,
      editObj: null,
      postList: [],
      budyItem:[],
      
   },
   actions: {


      fetchDataFrmApi: function ({ commit }, respdata) {
         respdata = api.fetchData();
         commit('SetFetchData',respdata);
      },

      addBuddyItem({ commit }, data) {
         commit('setaddBuddyItem',data)
      },

      updateFlgShowTextarea({ commit }, value) {
         commit('setFlgShowTextarea', value)
      },

      flgShowCloseBtn({commit},value){
    commit('setFlgShowCloseBtn',value)
      },
      flgObjectEdited({ commit }, value) {
         commit('SetflgObjectEdited', value)
      }
   },
   mutations: {

      SetFetchData(state, data) {
         
         state.postList = data;
      },

      setFlgShowTextarea(state, value) {
         state.flgShowTextArea = value;
      },
      setFlgShowCloseBtn(state, value) {
         state.flgShowCloseBtn = value;
      },
      SetflgObjectEdited(state, value) {
         state.flgObjectEdited = value;
      }, 
      setaddBuddyItem(state, data) {
       let lenP= state.postList.length
         console.log("postList",lenP)
         // state.editObj=data;
   //  state.postList.splice(state.postList.indexOf(data), 1);
    console.log("33333333333333",state.postList)
//     let test = state.budyItem,
//     len = test.length, i;

// for(i = 0; i < len; i++ )
// test[i] && test.push(test[i]);  // copy non-empty values to the end of the array

// test.splice(0,len);  // cut the array and leave only the non-empty values
   //  console.log("4444444444444444",test),
   //   state.budyItem = test
   let len= state.budyItem.length
   console.log("length",len)
         state.budyItem.push(data)
         console.log("sttae budyItem",state.budyItem)
      },
   }, 

   getters: {
      getaddBuddyItem(state) {
         return state.budyItem;
      },
      getFetchData(state) {
         return state.postList;
      },

      getisSHowPost(state) {
         state.isSHowPost = true;
      },

      getTextAreaValue(state) {
         return state.textAreaVal;
      },
      getEnablePTextAreaFlag(state) {
         return state.flgShowTextArea;
      },
      getFetchDatId(state, id) {
         state.postList.find(user => user.id === id)
      },

      getflgObjectEdited(state) {
         return state.flgObjectEdited;
      }
   },
},
)

export default store;




