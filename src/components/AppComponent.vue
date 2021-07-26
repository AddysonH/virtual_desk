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
    

}
</script>

<style scoped>

.app{
    background-color: red;
    width: 150px;
    height: 150px;
    text-align: center;
    margin-bottom: 10px;
}

#draggable{
    position: absolute;
}

.drop-zone{
  text-align: center;

}
</style>