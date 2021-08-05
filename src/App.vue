<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>

body{
  background-color: #f3f3f3;
}

/* .flexbox {
  display: flex;
  width:100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #313131;
  padding: 15px 25px;
  background-color: #ffc06e;
    background-image: url('./assets/CSS/slava-keyzman-ZG4Y6ILPARw-unsplash.jpg');
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: center center;
} */

.grid {
  display: grid;
grid-template-columns: auto auto auto auto auto;
}

.gridItem {
  border: 1px solid black;
  height: 150px;
  width: 150px;
  margin:0 auto;
}
.gridItem:hover{
  border: 1px solid rgb(36, 247, 36);
}


  .drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
  }
  
  .drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>
