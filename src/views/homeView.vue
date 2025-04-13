<template>
  <el-container class="app-container" :class="{ 'sidebar-minimized': isSidebarMinimized }">
    <SideBar
      @toggle-sidebar="handleSidebarToggle"
      @show-community="handleShowCommunity"
      @show-main="handleShowMain"
      @show-dashboard="handleShowDashboard"
    />
    <el-main class="main-content">
      <div class="content-wrapper">
        <MainContent v-if="!showCommunityContent && !showDashboard" />
        <CommunityContent v-if="showCommunityContent" />
        <DataDashboard v-if="showDashboard" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
import SideBar from '../components/sideBar.vue'
import MainContent from '../components/mainContent.vue'
import CommunityContent from '../components/communityContent.vue'
import DataDashboard from '../components/dataDashboard.vue'

export default {
  components: {
    SideBar,
    MainContent,
    CommunityContent,
    DataDashboard
  },
  data() {
    return {
      isSidebarMinimized: false,
      showCommunityContent: false,
      showDashboard: false
    }
  },

  methods: {
  // 保留现有方法
  handleSidebarToggle(isMinimized) {
    this.isSidebarMinimized = isMinimized;
  },
  handleShowCommunity() {
    this.showCommunityContent = true;
    this.showDashboard = false;
  },
  handleShowMain() {
    this.showCommunityContent = false;
    this.showDashboard = false;
  },
  // 添加新方法
  handleShowDashboard() {
    this.showCommunityContent = false;
    this.showDashboard = true;
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
  max-width: 1200px; /* 内容区域最大宽度 */
  width: 100%;
  height: 100%;
  margin: 0 auto; /* 这是关键：在可用空间内居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
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
