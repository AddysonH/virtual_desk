<template>
    <div class="gridItem">
        <draggable :square="squareOne" group="apps">
          
        </draggable>
    </div>    
</template>


<script>
import draggable from "vuedraggable";
export default {
    name: 'Squares',
    components:{
      draggable
    },
    props: ['id','draggable','square'],
data () {
    return { 
    squareOne: [],
    }
    },
}
</script>

<style>
.gridItem {
  border: 1px solid black;
  height: 150px;
  width: 150px;
  margin:0 auto;
}
.gridItem:hover{
  border: 1px solid rgb(36, 247, 36);
}

</style>
