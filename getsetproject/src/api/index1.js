// import axios from 'axios';
// const obj= require('../assets/posts.json');


export default{


    users:[
        {
            id:"1" ,
            name:"sahil", 
            image : "", 
            language: "javascript" ,
                    
            },
        { 
            id:"2" ,name:"sahrma ", image : "",language: "javascript"
         },
        {
            id:"3" ,name:"Dew solution", image : "", language: "javascript"         
             },
        {
            id:"4" ,name: " Navinice", image: "", language: "javascript"         
            },
        { 
            id:"5" ,name:"Dew solution", image : "", language: "javascript"         
        }
     ],
    fetchData(){

        // alert('elo i am axios fetch data ')
        //  return axios.get(`assets/dataApi`);
        return this.users;

    
     

        // .then(
        //     response=>{
        //         response=response.data,
        //     alert("shsj"+response)
        // })
    }
}