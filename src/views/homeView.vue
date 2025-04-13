<template>
  <el-container class="app-container" :class="{ 'sidebar-minimized': isSidebarMinimized }">
    <SideBar @toggle-sidebar="handleSidebarToggle" />
    <el-main>
      <MainContent />
    </el-main>
  </el-container>
</template>

<script>
import SideBar from '../components/sideBar.vue'
import MainContent from '../components/mainContent.vue'

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
