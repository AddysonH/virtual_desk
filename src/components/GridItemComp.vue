<template>
<div>
    <div>
        <div class="gridItem"
            :id="id"
            @dragover.prevent
            @drop.prevent="drop"
        >
           <slot /> 
        </div>
        <div class="gridItem">
           <slot /> 
        </div>
        <div class="gridItem">
           <slot /> 
        </div>
        <div class="gridItem">
           <slot /> 
        </div>
        <div class="gridItem">
           <slot /> 
        </div>
    </div>     
</div>
        
</template>


<script>
export default{
    name: 'GridItemComp',
    props:[],
    methods:{
        drop: e => {
            const card_id = e.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id);

            card.style.display="block";

            e.target.appendChild(card);
        }
    }
}
</script>