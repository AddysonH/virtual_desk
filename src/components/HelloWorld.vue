<template>
    <div class="hello">
    <h1>Hello World</h1>
    <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default ({
    name: 'HelloWorld',
    data(){
        return {
            msg: 'Welcome to vue.js app'
        }
    }
})
</script>
