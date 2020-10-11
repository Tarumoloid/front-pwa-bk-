<template>
  <div>
    <nav>
    <router-link to="/page1">Go to page1</router-link>
    </nav>
    <router-view />
    <p>親コンポーネント</p>
    <button v-on:click="storeClear">Store状態の初期化</button>
    <button v-on:click="callAsyncWebApi">非同期WebAPI呼び出し</button>
    <button v-on:click="callAwaitWebApi">同期WebAPI呼び出し</button>
    <button v-on:click="callInsertWebApi">InsertWebAPI呼び出し</button>
    <button v-on:click="saveLocalStrage">localStrageにセット
    </button>
    <input type="text" v-bind:value="name">
    <button v-on:click="nameSet">名前登録</button>
    <p>{{name}}</p>
    <p>{{msg}}</p>
    <p>{{ methodsData() }}</p>
    <p>{{ computedData }}</p>
    <p>{{ count }}回クリックしたよ</p>
    <p>stateの状態{{ $store.state.count }}回クリックしたよ</p>
    <p>stateの状態(ハーフ){{ $store.getters.halfCount }}回クリックしたよ</p>
    <button v-on:click="increment">カウントを増やす</button>
    <button v-on:click="incrementStore">Storeカウントを増やす</button>
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
  <p>子コンポーネント</p>
  <PlayGroundChild v-bind:pcount=count v-on:child-event="parentMethod"></PlayGroundChild>
  </div>
</template>

<script>
import PlayGroundChild from './PlayGroundChild.vue'

export default {
  components: {
    PlayGroundChild
  },
  name: 'PlayGround',
  data: function () {
    return {
      msg: 'どうも、樽本!!!!!!',
      message: 'どうも、樽本です',
      list: [
        {id: 1, name: 'スライム', hp: 100},
        {id: 2, name: 'ゴブリン', hp: 200},
        {id: 3, name: 'ドラゴン', hp: 500}
      ],
      count: 0,
      name: '樽本さん',
      item: {
        id: 1,
        alt: '商品サムネ',
        width: 200,
        height: 200
      }
    }
  },
  methods: {
    saveLocalStrage: function () {
      const parsed = JSON.stringify(this.list)
      localStorage.setItem('list', parsed)
    },
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
    parentMethod: function (childMessage) {
      alert(childMessage)
    },
    incrementStore: function () {
      this.$store.commit('increment')
    },
    storeClear: function () {
      this.$store.commit('clear')
    },
    nameSet: function () {
      this.$store.commit('nameSet', {name: this.name})
    },
    callAsyncWebApi: function () {
      this.$store.dispatch('asyncGetWebApiAction')
    },
    callAwaitWebApi: function () {
      this.$store.dispatch('awaitGetWebApiAction')
    },
    callInsertWebApi: function () {
      this.$store.dispatch('insertWebApiAction', {name: this.$store.state.name})
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
p{font-size:60px;
color: seashell;
background-color: #b44c97;
width: 300px;}
</style>
