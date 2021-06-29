<template>
    <div> 
        <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"  @dragover.prevent @drop.prevent="drop">
    <AppComponent id="grid" draggable="true"><p>App 1</p></AppComponent>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
  
</div>

</nav> 
    </div>
</template>

<script>
import AppComponent from './AppComponent.vue'
export default {
    name: 'NavbarComponent',
    components: {
        AppComponent
    },
    props: [],
    methods:{}
}
</script>


