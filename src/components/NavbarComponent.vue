<template>
    <div> 
        <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu drop-zone" aria-labelledby="dropdownMenuButton" @drop='onDrop($event, 1)' @dragover.prevent @dragenter.prevent>
    <AppComponent id="grid"><p>App 1</p></AppComponent>
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


