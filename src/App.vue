<template>
  <div id="app">
      <NavbarComponent/>

      <main class="flexbox">
      <DeskComponent id=grid-1/>   
      </DeskComponent>

      <div class="drop-zone" @drop='onDrop($event, 1)' @dragover.prevent @dragenter.prevent>
            <div v-for="item in listOne" :key="item.title" class="drag-el" draggable @dragstart= 'startDrag($event, item)'>
              {{item.title}}    
            </div>
      </div>

      <div class="drop-zone" @drop='onDrop($event, 2)' @dragover.prevent @dragenter.prevent>
            <div v-for="item in listTwo" :key="item.title" class="drag-el" draggable @dragstart= 'startDrag($event, item)'>
              {{item.title}}    
            </div>
      </div>
    
      

    </main>
  </div>
</template>

<script>

import DeskComponent from './components/DeskComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    DeskComponent,
    NavbarComponent
  },
 
data () {
    return { 
      items: [
      { id: 0, 
        title: 'Item A', 
        list: 1
      },
      { id: 1, 
         title: 'Item B', 
         list: 1
      },
      { id: 2, 
        title: 'Item C', 
        list: 2
        },
    ]}
    },
    computed: {

      listOne () {
          return this.items.filter(items => items.list === 1)
      },
      listTwo (){
        return this.items.filter(items => items.list ===2)
      }
    },
    
methods: {

  startDrag: (evt, item) => {
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('itemID', item.id)
  },

  onDrop (evt, list) {
    const itemID = evt.dataTransfer.getData('itemID')
    const item = this.items.find(item => item.id == itemID)
    item.list = list
  }
}
}
</script>

<style>

body{
  background-color: #f3f3f3;
}

.flexbox {
  display: flex;
  width:100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #313131;
  padding: 15px 25px;
  background-color: #F3f3f3;
}

/* .redBox {
  width: 100px;
  height: 100px;
  background-color: red;
  cursor: pointer;
  text-align: center;
  position: relative;
}
.greenBox {
  width: 100px;
  height: 100px;
  background-color: green;
  cursor: pointer;
  text-align: center;
}
.purpleBox {
  width: 100px;
  height: 100px;
  background-color: purple;
  cursor: pointer;
  text-align: center;
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
