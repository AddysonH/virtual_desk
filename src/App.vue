<template>
  <div id="app">
    <main class="flexbox">
<DeskComponent id=board-1>
<AppComponent id="card-1" draggable="true">
<p>card 1</p>
</AppComponent>
</DeskComponent>

<DeskComponent id=board-1>
<AppComponent id="card-1" draggable="true">
<p>card 2</p>
</AppComponent>
</DeskComponent>

    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DeskComponent from './components/DeskComponent.vue';
import AppComponent from './components/AppComponent.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    DeskComponent,
    AppComponent
  }
}
</script>

<style>

body{
  background-color: #f3f3f3;
}

.flexbox {
  display: flex;
  justify-content: space-between;

  width:100%;
  max-width: 768px;
  height: 100vh;

  overflow: hidden;

  margin: 0 auto;
  padding: 15px;
}

.flexbox .board {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 300px;

  background-color: #313131;

  padding:15px;
}

.flexbox .board .card {
  padding: 15px 25px;
  background-color: #F3f3f3;

  cursor: pointer;
  margin-bottom: 15px;
  }

</style>
