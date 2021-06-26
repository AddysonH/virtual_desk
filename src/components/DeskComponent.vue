<template>
    <div>
        <div class="gridContainer">
            <div class="gridItem">
                <p>1</p>
            </div>
        <div class="gridContainer">
            <div class="gridItem">
                <p>2</p>
            </div>
        </div>
        <div class="gridContainer">
            <div class="gridItem">
                <p>3</p>
            </div>
        </div>
        <div class="gridContainer">
            <div class="gridItem">
                <p>4</p>
            </div>
        </div>
        <div class="gridContainer">
            <div class="gridItem">
                <p>5</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeskComponent',
    props: {
        msg: String
    }
}
</script>

<style scoped>
.gridContainer{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 30px;
}

.gridItem{
    border: 1px solid black;
    width: 150px;
    height: 150px;

}
</style>
