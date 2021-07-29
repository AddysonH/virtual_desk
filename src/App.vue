<template>
  <div id="app">
      <!-- <NavbarComponent/>

    <main class="flexbox">
      <DeskComponent id=grid-1/>   
      </DeskComponent>
    </main> -->
    <router-link to='/'>Home</router-link>
    <router-link to='Cows'>Cows</router-link>
    <router-view/>
  </div>
</template>

<script>

// import DeskComponent from './components/DeskComponent.vue';
// import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    // DeskComponent,
    // NavbarComponent
  },
}
</script>

<style>

body{
  background-color: #f3f3f3;
}

.flexbox {
  display: flex;
  width:100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #313131;
  padding: 15px 25px;
  background-color: #ffc06e;
  /* background-image: url(https://officialpsds.com/imageview/7v/38/7v38wk_large.png?1529339811); */
    background-image: url('./assets/CSS/slava-keyzman-ZG4Y6ILPARw-unsplash.jpg');
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: center center;
}

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
