import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex',
    count: 10,
    name: '初期値'
  },
  getters: {
    halfCount: function (state) {
      return state.count / 2
    }
  },
  mutations: {
    increment: function (state) {
      state.count++
    },
    clear: function (state) {
      state.count = 0
      state.message = 'Hello Vuex'
    },
    nameSet: function (state, payload) {
      state.name = payload.name
    },
    getWebApi: function (state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    async asyncGetWebApiAction (context) {
      const payload = {
        message: ''
      }
      axios.get('http://localhost:8083/postStaff/selectall')
        .then((res) => {
          payload.message = res.data
          context.commit('getWebApi', payload)
        })
      console.log('hello world!非同期')
    },
    async awaitGetWebApiAction (context) {
      const payload = {
        message: ''
      }
      await axios.get('http://localhost:8083/postStaff/selectall')
        .then((res) => {
          payload.message = res.data
          context.commit('getWebApi', payload)
        })
      console.log('hello world!同期')
    },
    async insertWebApiAction (state, payload) {
      await axios.post('http://localhost:8083/postStaff/post', {
        id: '0005',
        name: payload.name,
        age: 63
      })
        .then((res) => {
          console.log('登録完了')
        })
    }
  },
  modules: {
  }
}
)
