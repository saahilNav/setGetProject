 import qs from 'qs'; 
 import axios from 'axios'
 const Client_Id='6b1df6fd3710950';
 const RootUrl='https://api.imgur.com';
 
 export default {

    login() { 
        
    const querystring = {
        client_id:Client_Id,
        response_type:'token',
    };
   window.location=  `${RootUrl}/oauth2/authorize?${qs.stringify(querystring)}`;
}     
     ,
    fetchImages(token){
        return axios.get(`${RootUrl}/3/account/me/images `,{
        headers:{
            Authorization:`Bearer ${token }`
        }
    
    });
},
uploadImages(images,token){
   const promises= Array.from(images).map(image=>{
        const formData=new FormData();
        formData.append('image',image);

    return axios.post(`${RootUrl}/3/image `,formData,{
      headers:{
Authorization: `Bearer ${token}`
      }
 });
    
  });

  return Promise.all(promises)
}
 }