<template>
<div>
    <div class="flexbox">
        <BrownDesk />
    </div>
<!-- <GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp />
<GridItemComp /> -->


</div>    
</template>

<script>
// import GridItemComp from './GridItemComp.vue'
import BrownDesk from './BrownDesk.vue'

export default{
    name: 'DeskComponent',
    components: {
        // GridItemComp
        BrownDesk
    }
}
</script>

<style>
*{
border: 1px solid red;
}
.flexbox{
  background-image: url('../assets/CSS/download (1).png');
  width: 700px;
  height: 700px;
  margin: 0 auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 700px;
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
    background-image: url('../assets/CSS/download (1).png');
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: center center;
} */

</style>
