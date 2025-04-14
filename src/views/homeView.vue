<template>
  <el-container class="app-container" :class="{ 'sidebar-minimized': isSidebarMinimized }">
    <SideBar
      @toggle-sidebar="handleSidebarToggle"
      @show-community="handleShowCommunity"
      @show-main="handleShowMain"
      @show-dashboard="handleShowDashboard"
    />
    <!-- 主内容区域 -->
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
/* 全局样式 */
.app-container {
  /* 设置高度为100% */
  height: 100vh;
  /* 设置宽度为100% */
  width: 100vw;
  /* 设置为弹性布局 */
  display: flex;
  /* 设置为相对定位 */
  position: relative;
}

/* 侧边栏样式 */
.app-container {
  /* 设置高度为100% */
  height: 100vh;
  /* 设置为弹性布局 */
  display: flex;
  /* 设置为相对定位 */
  position: relative;
}

/* 主内容区域样式 */
.main-content {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  transition: margin-left 0.3s ease;
  margin-left: 230px; /* 添加左边距，与侧边栏宽度一致 */
}

/* 内容区域样式 */
.content-wrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  overflow-y: auto;
}

.sidebar-minimized .main-content {
  margin-left: 60px; /* 侧边栏收起时的左边距 */
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
