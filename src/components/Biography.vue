<template>
    <div class ="TopPic" align="center">
      <img src="../assets/Profile.jpg" width="50%" height="50%">
      <div class="Content" :style="{'font-family': 'Amatic SC', cursive,'font-size': '80px'}">
        <p>Kazumasa Tarumoto</p>
        <p>1990/08/22</p>
        <p>Born in Yamaguchi</p>
      </div>
      <hr class="hr_bar" width="70%"/>
        <div class="Body">
        <p>TestDrive</p>
      </div>
    </div>
</template>

<script>
</script>

<style>
.TopPic{
  position:absolute;
  top: 80px;
}

.Content{
  background-color: transparent;
  word-break: keep-all;
}

.Body{
  font-family: "Sawarabi Mincho";
  font-size: 30px;
  line-height: 150%;
}

.hr_bar {
  position: relative;
  height: 1px;
  border-width: 10;
  background-color: #00bcd4;
  background-image: -webkit-linear-gradient(left,#00bcd4 0%,#283593 50%,#00bcd4 100%);
  background-image:         linear-gradient(90deg,#00bcd4 0%,#283593 50%,#00bcd4 100%);
}

</style>
