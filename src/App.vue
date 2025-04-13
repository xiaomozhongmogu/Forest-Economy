<template>
  <el-container class="app-container" :class="{ 'sidebar-minimized': isSidebarMinimized }">
    <SideBar @toggle-sidebar="handleSidebarToggle" />
    <el-main>
      <MainContent />
    </el-main>
  </el-container>
</template>

<script>
import SideBar from './components/sideBar.vue'
import MainContent from './components/mainContent.vue'

export default {
  components: {
    SideBar,
    MainContent
  },
  data() {
    return {
      isSidebarMinimized: false
    }
  },
  methods: {
    handleSidebarToggle(isMinimized) {
      this.isSidebarMinimized = isMinimized
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  background-color: #FDFBF7;
}

.app-container {
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s ease;
}

.app-container.sidebar-minimized el-main {
  width: calc(100% - 60px); /* 当侧边栏最小化时，主内容区宽度调整 */
}
</style>
