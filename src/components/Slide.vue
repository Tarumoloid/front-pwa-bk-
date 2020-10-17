<template>
<div id="app">
  <slide :closeOnNavigation="true"
  width="250">
    <router-link to="/"><span>Home</span></router-link>
    <router-link to="/Biography"><span>Biography</span></router-link>
    <!--<router-link to="/Skills"><span>Skills</span></router-link>-->
    <router-link to="/Movie"><span>Movie</span></router-link>
  </slide>
  <div id="page-wrap"></div>
</div>
</template>

<style scoped>
span {
  font-family: 'Caveat', cursive;
  font-size: 45px;
}
</style>
