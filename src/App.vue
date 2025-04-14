<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  background-color: #FDFBF7;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 重置Element Plus的默认样式 */
:deep(.el-main) {
  padding: 0 !important;
  overflow: hidden !important;
  height: 100% !important;
}

:deep(.el-container) {
  height: 100% !important;
}

.app-container.sidebar-minimized .el-main {
  width: calc(100% - 60px);
}
</style>  