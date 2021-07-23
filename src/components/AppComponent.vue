<template>
<div>
    <div class="drop-zone" >
            <draggable :app="appList" group="apps">
              <div class="app" v-for="element in appList" :key="element.id">
                  {{element.title}}
              </div>
            </draggable>
      </div>
</div>
    
</template>

<script>
import draggable from "vuedraggable";
export default{
    name: 'AppComponent',
    components:{
      draggable
    },
    props: ['id','draggable','apps'],
    data () {
    return { 
      appList:[
        {
        title: 'App 1',
        id: 1
        },

        {
          title: 'App 2',
          id:2
        },
        {
          title: 'App 3',
          id:3
        }
      ]
    }
    },
    // computed: {

    //   listOne () {
    //       return this.items.filter(items => items.list === 1)
    //   },
    //   listTwo (){
    //     return this.items.filter(items => items.list ===2)
    //   }
    // },
    
// methods: {

//   startDrag: (evt, item) => {
//     evt.dataTransfer.dropEffect = 'move'
//     evt.dataTransfer.effectAllowed = 'move'
//     evt.dataTransfer.setData('itemID', item.id)
//   },

//   onDrop (evt, list) {
//     const itemID = evt.dataTransfer.getData('itemID')
//     const item = this.items.find(item => item.id == itemID)
//     item.list = list
//   }
// }
}
</script>

<style scoped>

.app{
    background-color: red;
    width: 150px;
    height: 150px;
    text-align: center;
}

#draggable{
    position: absolute;
}

.drop-zone{
  text-align: center;
}
</style>