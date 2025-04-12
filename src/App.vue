<script setup>
import TestPersistence from './components/TestPersistence.vue'
import { useTestStore } from './stores/testStore'

const testStore = useTestStore()
</script>

<template>
  <div id="app">
    <h1>欢迎使用Vue.js应用</h1>
    <p>这是一个简单的Vue.js应用，测试div显示问题。</p>
    <div style="border: 2px solid red; padding: 10px;">
      这是一个测试div，确保它能够正确显示。
    </div>
    <el-button>click me</el-button>
  </div>
  <testCon></testCon>
  <TestPersistence />
  <div>
  <p>{{ testStore.token }}</p>
  <el-button @click="testStore.setToken('newToken')">appear</el-button>
  <el-button @click="testStore.removeToken">disappear</el-button>
</div>
</template>

<style scoped>

</style>
