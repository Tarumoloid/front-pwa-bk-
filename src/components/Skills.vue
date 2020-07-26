<template>
<div class ="panel">
  Skills
  <ul class="top-banner">
    <li><img src="../assets/TechnologyElementIcons/VueJs.png" width="100px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/SpringBoot.png" width="200px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/PostgreSql.png" width="100px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/Cassandra.png" width="140px" height="70px"></li>
  </ul>
  <ul class="top-banner">
    <li><img src="../assets/TechnologyElementIcons/Nginx.jpg" width="200px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/Jenkins.png" width="100px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/Docker.png" width="100px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/GitLab.png" width="130px" height="100px"></li>
  </ul>
  <ul class="top-banner">
    <li><img src="../assets/TechnologyElementIcons/Aws.png" width="200px" height="100px"></li>
    <li><img src="../assets/TechnologyElementIcons/RedHat.png" width="100px" height="50px"></li>
    <li><img src="../assets/TechnologyElementIcons/Bash.png" width="300px" height="50px"></li>
  </ul>
</div>
</template>

<script>
</script>

<style>
.panel {
  position:absolute;
  top: 80px;
  left: 400px
}

.top-banner {
  display: flex;
  flex-wrap:wrap;
}
.top-banner li {
  /*width: 100px;/*←画像を横に4つ並べる場合*/
  /*padding:0 5px;/*←画像の左右に5pxの余白を入れる場合*/
  box-sizing:border-box;
}
.top-banner li img {
  max-width:100%; /*画像のはみだしを防ぐ*/
  height: auto; /*画像の縦横比を維持 */
}
</style>
