<template>
<div class="dropper">
uplod form
<input type="file"  @change="uploadImages($event.target.files)"  multiple  accept="image/*"/>
<span> DragFile</span>
</div>
</template>


<script>
import { mapActions } from 'vuex'
export default{
    name:'UploadForm',
    methods:mapActions(['uploadImages'])
};
</script>
<style scoped>
.dropper{
    border-radius:5px;
    height:30vh;
    border:2px dashed black;
  display: flex;
justify-content:center;
align-items: center;
position: relative;
}
.dropper:hover{
 background-color: #eee;
 cursor: pointer
}
input{
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
     cursor: pointer
}
</style>