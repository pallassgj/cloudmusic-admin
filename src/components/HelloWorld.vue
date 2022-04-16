<script setup>
import { ref } from 'vue'

import { sayHello } from '../api/hello'

const count = ref(0)
const message = ref("鲜花音乐盒后台")

const hi = () => {
  sayHello().then(resp => {
    message.value = resp.data
  })

  // get('https://cloud-music-1776550-1310758610.ap-shanghai.run.tcloudbase.com/sayHello').then(res => {
  //   message.value = res.data
  // })
}

</script>

<template>
  <h1>{{ message }}</h1>

  <div class="container">
    <q-btn color="primary" @click="count++">点击次数{{ count }}</q-btn>
    <br/><br/>
    <q-btn color="primary" @click="hi">请求接口</q-btn>
  </div>
  

</template>

<style scoped>
a {
  color: #42b983;
}

.container {
  width: 100%;
  height: 100%;
  background: #42b983;
  display: inline;
}
</style>
