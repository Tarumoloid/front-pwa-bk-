<template>
  <div>
    <router-view></router-view>
    <Slide></Slide>
  </div>
</template>

<script>
import Slide from './components/Slide'
import Chat from './components/Chat.vue'
import Home from './components/Home.vue'
import PlayGround from './components/PlayGround.vue'

export default {
  components: {
    Home, PlayGround, Chat, Slide
  }
}
</script>
