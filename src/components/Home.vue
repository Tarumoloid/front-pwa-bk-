<template>
  <div class="hello">
    <div class="video-container">
    <video id="video" src="../assets/IMG_6028.mp4" autoplay playsinline loop muted></video>
    <div class="cont">
      <div class="cont-inner">Give way to just another day,
        I start over again.
        </div>
      </div>
      </div>
    <br>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'Home',
  components: {
    VueLoading
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.video-container {
  position: relative;
}

.video-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
}

video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
}

.cont{
  display:flex;
  justify-content:center;
  margin: 10% 0 0;
}
.cont-inner{
  font-family: 'Amatic SC', cursive;
  font-size: 100px;
  background-color: transparent;
}

</style>
