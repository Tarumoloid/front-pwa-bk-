<template>
<div>
  <h2>RealTimeChat</h2>

 <!-- 投稿フォーム -->
 <form>
   名前: <input v-model="name" placeholder="名前を入れてね">
   投稿内容:  <input v-model="message" placeholder="投稿内容入れてね">
   <button v-on:click="sendMessage">メッセージ送信</button>
 </form>

  <!-- チャットの表示 -->
  <div v-for="(row,index) in messages" :key="index">{{ row.name }}: {{ row.message }}</div>
</div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'Index',
  data: () => ({
    name: '',
    message: '',
    messages: [],
    socket: io('localhost:3000')
  }),
  methods: {
    // チャットを投稿する処理
    sendMessage (e) {
      e.preventDefault()
      this.socket.emit('POST_MESSAGE', {
        name: this.name,
        message: this.message
      })
      this.message = ''
    }
  },
  mounted () {
    // 投稿されたデータの取得
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data]
    })
  }
}
</script>

<style scoped>
</style>
