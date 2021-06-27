<template>
    <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    >
        <slot />
    </div>


</template>

<script>
export default{
    name: 'AppComponent',
    props: ['id','draggable'],
    methods: {
        dragStart: e => {
            const target = e.target;

            e.dataTransfer.setData('card_id', target.id);

            setTimeout(() => {
                target.style.display = "none";
            }, 0);
        }
    }
}
</script>

<style scoped>

.app{
    width: 100px;
    height: 100px;
    background-color: red;
}

#draggable{
    position: absolute;
}
</style>