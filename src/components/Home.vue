<template>
    <div>
        <div>
            <h1 class="mainTitle">Welcome to your virtual desk!</h1>
        </div>
        <div class="button">
            <router-link to='StartupDesk'><button type="button" class="btn btn-primary btn-lg">Get Started</button></router-link>
        </div>

    </div>
</template>

<script>

export default ({
      name: 'Home',
      data(){}  
    })
</script>

<style>
    .mainTitle{
        text-align: center;
    }
    
    .button{
    text-align: center;
    margin-top: 150px;
       }
</style>
