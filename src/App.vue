<template>
  <div>
    <router-view></router-view>
    <Slide></Slide>
  </div>
</template>

<script>
import Slide from './components/Slide'
import Home from './components/Home.vue'

export default {
  components: {
    Home, Slide
  }
}
</script>
