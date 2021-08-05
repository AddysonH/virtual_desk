<template>
    <div>
        <div class="deskTopLeft">
        <draggable :square="squareOne" group="apps" >
          
        </draggable>
        </div>
        <div class="deskTopRight">
        <draggable :square="squareOne" group="apps" >
          
        </draggable>
        </div>
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

.deskTopLeft{
    border: 1px solid black;
    height: 150px;
    width: 150px;
    position: relative;
    top: 60px;
    left: 30px;
}
.deskTopRight{
    border: 1px solid black;
    height: 150px;
    width: 150px;
    position: relative;
    bottom: 90px;
    left: 500px;
}
.deskTopLeft:hover{
  border: 1px solid rgb(36, 247, 36);
}
.deskTopRight:hover{
  border: 1px solid rgb(36, 247, 36);
}


</style>
