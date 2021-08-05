<template>
    <div>
      <NavbarComponent />
      <main class="flexbox">
      <DeskComponent />
      </main>
    </div>
</template>

<script>

import NavbarComponent from './NavbarComponent.vue'
import DeskComponent from './DeskComponent.vue'

export default {
  name: 'StartupDesk',
  components: {
    NavbarComponent,
    DeskComponent
  }
}
</script>

<style>
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

// position static is a position all html elements come with.
// position relative gives you access to top, bottom, left, and right properties. I can move it anywhere I want based on it's position.
// position absolute sticks it in a specific corner where it stays. Also top, bottom, left, right
// position fixed places item relative to the screen
position