<template>
    <div class ="TopPic" align="center">
      <img src="../assets/Profile.jpg" width="50%" height="50%">
      <div class="Content">
        <p>Kazumasa Tarumoto</p>
        <p>1990/08/22</p>
        <p>Born in Yamaguchi</p>
      </div>
      <hr class="hr_bar" width="70%"/>
        <div class="Body">
        <p>2001</p>
        <p>ITに触れたきっかけ</p>
        <p>学校に居場所がなくなり、チャットに出会い、遠方の人々とコミュニケーションが取れることに大感動する</p>
        <p>2009/04~2013/03</p>
        <p>山口大学で情報科学を専攻する。大学時代はあまりプログライミングに興味がなかった</p>
        <p>(というのもIDEではなく、テキストエディタでプログラミングする授業だったため、楽しさを見いだせず</p>
        <p>2013/04~2018/3</p>
        <p>山口大学で情報科学を専攻する。大学時代はあまりプログライミングに興味がなかった</p>
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
  font-family: 'Amatic SC', cursive;
  font-size: 80px;
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
