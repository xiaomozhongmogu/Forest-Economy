<template>
  <el-container class="app-container" :class="{ 'sidebar-minimized': isSidebarMinimized }">
    <SideBar 
      @toggle-sidebar="handleSidebarToggle" 
      @show-community="handleShowCommunity"
      @show-main="handleShowMain" 
    />
    <el-main class="main-content">
      <div class="content-wrapper">
        <MainContent v-if="!showCommunityContent" />
        <CommunityContent v-if="showCommunityContent" />
      </div>
    </el-main>
  </el-container>
</template>

<script>
import SideBar from '../components/sideBar.vue'
import MainContent from '../components/mainContent.vue'
import CommunityContent from '../components/communityContent.vue'

export default {
  components: {
    SideBar,
    MainContent,
    CommunityContent
  },
  data() {
    return {
      isSidebarMinimized: false,
      showCommunityContent: false
    }
  },
  methods: {
    handleSidebarToggle(isMinimized) {
      this.isSidebarMinimized = isMinimized;
    },
    handleShowCommunity() {
      this.showCommunityContent = true;
    },
    handleShowMain() {
      this.showCommunityContent = false;
    }
  }
}
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  position: relative;
}

.main-content {
  flex: 1;
  margin-left: 230px;
  height: 100%;
  position: relative;
  transition: margin-left 0.3s ease;
}

.content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  overflow-y: auto;
}

.sidebar-minimized .main-content {
  margin-left: 60px;
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
</style>
