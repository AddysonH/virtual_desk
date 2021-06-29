<template>

<div
    :id="id"
    class="grid"
    @dragover.prevent
    @drop.prevent="drop"
    >

     <div class="gridItem">
           <slot /> 
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>
    <div class="gridItem">
            
    </div>

</div>


        
</template>

<script>
export default {
    props: ['id'],
    methods: {
        drop: e => {
            const  card_id = e.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id);
            
            card.style.display = "block";
            
            e.target.appendChild(card);
            
         }
    }
}
</script>

<style scoped>
a{
    background-color: orange;
    text-decoration: none;
    padding: 15px 25px;
    font-family: sans-serif;
    font-size: 25px;
    color: #fff;
    border-radius: 10px;
    display: inline-block;
}

a:hover{
background-color:blue;
-webkit-box-shadow: 0px 0px 100px 0px rgb(10, 14, 230);
-moz-box-shadow: 0px 0px 100px 0px rgba(10, 14, 230);
box-shadow: 0px 0px 100px 0px rgba(10, 14, 230);
}

</style>
