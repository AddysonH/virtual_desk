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

</style>
