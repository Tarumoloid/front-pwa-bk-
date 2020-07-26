<template>
  <div>
    <p>親の数{{ pcount }}回クリックしたよ</p>
    <p>子の数{{ count }}回クリックしたよ</p>
    <p>stateの状態{{ $store.state.count }}回クリックしたよ</p>
    <button v-on:click="increment">カウントを増やす</button>
    <button v-on:click="clear">カウントを0に戻す</button>
    <button v-on:click="heal(list)">全員回復する</button>
    <p>{{plusCount}}</p>
    <ul>
        <li v-for= "(item, index) in list" v-bind:key="item.id">
          ID.{{ item.id }}{{ item.name }} HP.{{ item.hp }}
          <span v-if="item.hp < 50">瀕死!</span>
          <button v-on:click="doAttack(index)">攻撃する</button>
          <button v-on:click="doubleAttack(index)">必殺技</button>
        </li>
      </ul>
  <p><button v-on:click="click">子から親にイベント発火</button></p>
  </div>
</template>

<script>
export default {
  props: ['pcount'],
  name: 'PlayGroundChild',
  data: function () {
    return {
      msg: 'どうも、樽本!!!!!!',
      message: 'どうも、樽本です',
      childMessage: 'どうも、樽本の子コンポーネントです',
      list: [
        {id: 1, name: 'スライム', hp: 100},
        {id: 2, name: 'ゴブリン', hp: 200},
        {id: 3, name: 'ドラゴン', hp: 500}
      ],
      count: 0,
      item: {
        id: 1,
        alt: '商品サムネ',
        width: 200,
        height: 200
      }
    }
  },
  methods: {
    increment: function () {
      this.count += 1
    },
    clear: function () {
      this.count = 0
    },
    doAttack: function (index) {
      this.list[index].hp -= 10
    },
    doubleAttack: function (index) {
      this.list[index].hp -= 30
    },
    heal: function (list) {
      for (var i = 0; i < list.length; i++) {
        console.log(list[i])
        this.list[i].hp += 50
      }
    },
    methodsData: function () {
      return Math.random()
    },
    click: function () { // ボタンをクリックするとこのメソッドが起動する
      this.$emit('child-event', this.childMessage) // 親へイベント発火を伝える
    }
  },
  computed: {
    plusCount: function () {
      return this.count + 10
    },
    computedData: function () {
      return Math.random()
    }
  }
}

</script>

<style>
</style>
