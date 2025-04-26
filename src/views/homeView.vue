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


<script setup>
import { ref } from 'vue'
import SideBar from '../components/sideBar.vue'
import MainContent from '../components/mainContent.vue'
import CommunityContent from '../components/communityContent.vue'
import DataDashboard from '../components/dataDashboard.vue'

const isSidebarMinimized = ref(false)
const showCommunityContent = ref(false)
const showDashboard = ref(false)

const handleSidebarToggle = (isMinimized) => {
  isSidebarMinimized.value = isMinimized
}

const handleShowCommunity = () => {
  showCommunityContent.value = true
  showDashboard.value = false
}

const handleShowMain = () => {
  showCommunityContent.value = false
  showDashboard.value = false
}
const handleShowDashboard = () => {
  showCommunityContent.value = false
  showDashboard.value = true
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
