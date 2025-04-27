<template>
  <el-container class="layout-container" :class="{ 'minimized': isMinimized }">
    <!-- 侧边栏 -->
    <el-aside :width="isMinimized ? '64px' : '230px'" class="aside-container">
      <el-menu :default-active="activeMenu" class="sidebar" :class="{ 'minimized': isMinimized }"
        :collapse="isMinimized" :collapse-transition="true" background-color="#FDFBF7" text-color="#2B3F2B"
        active-text-color="#556B2F" router>
        <!-- Logo区域 -->
        <div class="logo-container">
          <div class="logo" v-if="!isMinimized">
            <span class="logo-text">🌿林下经济</span>
          </div>
          <el-button v-else type="text" circle class="minimize-button centered-button" @click="toggleMinimize">
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-button>
          <el-button v-if="!isMinimized" type="text" circle class="minimize-button" @click="toggleMinimize">
            <el-icon>
              <ArrowLeft />
            </el-icon>
          </el-button>
        </div>

        <!-- 新建项目 -->
        <div class="new-project-container">
          <el-button class="new-project-button" type="primary" plain @click="createNewProject">
            <el-icon>
              <Plus />
            </el-icon>
            <span v-if="!isMinimized">新建项目</span>
            <span v-if="!isMinimized" class="shortcut-hint"></span>
          </el-button>
        </div>

        <!-- 导航菜单 -->
        <el-menu-item index="/home">
          <el-icon>
            <House />
          </el-icon>
          <template #title>首页</template>
        </el-menu-item>

        <el-menu-item index="/community">
          <el-icon>
            <ChatDotRound />
          </el-icon>
          <template #title>社区</template>
        </el-menu-item>

        <el-menu-item index="/data_dashboard">
          <el-icon>
            <DataAnalysis />
          </el-icon>
          <template #title>数据看板</template>
        </el-menu-item>

        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <Collection />
            </el-icon>
            <span>资源库</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/resources/mushroom">林下食用菌培育技术</el-menu-item>
            <el-menu-item index="/resources/economy">中国各省林下经济产值</el-menu-item>
            <el-menu-item index="/resources/breeding">林下养殖最佳实践案例</el-menu-item>
            <el-menu-item index="/resources/medicine">林下药材种植指南</el-menu-item>
            <el-menu-item index="/resources/policy">林下经济政策扶持</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="/data-management">
          <el-icon>
            <Search />
          </el-icon>
          <template #title>数据管理与分析</template>
        </el-menu-item>

        <!-- 历史记录区域 -->
        <div class="history-section" v-if="!isMinimized && historyStore.chatHistory.length > 0">
          <div class="history-title">历史记录</div>
          <div class="history-list">
            <div v-for="(history, index) in historyStore.chatHistory" :key="index" class="history-item">
              <div class="history-item-content" @click="loadHistory(history)">
                <el-icon>
                  <Clock />
                </el-icon>
                <span class="history-item-title">{{ history.title }}</span>
              </div>
              <el-icon class="delete-icon" @click.stop="confirmDelete(history)">
                <Close />
              </el-icon>
            </div>
          </div>
        </div>

        <!-- 底部区域 -->
        <div class="bottom-section" v-if="!isMinimized">
          <!-- 升级区域 -->
          <el-card class="upgrade-section" shadow="never">
            <template #header>
              <div class="upgrade-title">不知道如何使用？</div>
            </template>
            <div class="upgrade-desc">
              点击用户手册
              <br />
              开始使用先进分析工具和模型。
            </div>
            <el-button type="success" class="upgrade-button" @click="$router.push('/user-manual')">
              <el-icon>
                <TopRight />
              </el-icon> 用户手册
            </el-button>
          </el-card>

          <!-- 登录按钮 -->
          <div class="auth-buttons">
            <el-button type="primary" class="auth-button login-button" size="large" @click="$router.push('/login')">
              登录
            </el-button>
          </div>
        </div>
      </el-menu>
    </el-aside>

    <!-- 主容器 -->
    <el-container class="main-container">
      <div class="content-wrapper">
        <router-view />
      </div>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHistoryStore } from '@/stores/historyStore'
import { ElMessageBox, ElMessage } from 'element-plus'
import {
  House,
  ChatDotRound,
  DataAnalysis,
  Collection,
  Search,
  ArrowLeft,
  ArrowRight,
  Plus,
  TopRight,
  Clock,
  Close
} from '@element-plus/icons-vue'

// 侧边栏状态
const isMinimized = ref(false)

// 获取当前路由和路由器
const route = useRoute()
const router = useRouter()

// 获取历史记录存储
const historyStore = useHistoryStore()

// 根据当前路由路径动态设置激活的菜单项
const activeMenu = computed(() => {
  // 处理嵌套路由情况
  if (route.path.includes('/resources/')) {
    return route.path
  }
  return route.path
})

// 切换侧边栏展开/收起状态
const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value
  // 可以保存状态到localStorage
  localStorage.setItem('sidebarMinimized', isMinimized.value)
}

// 创建新项目
const createNewProject = () => {
  // 刷新路由到新的homeView
  router.push({ path: '/home', query: { new: Date.now() } })
}

// 加载历史记录
const loadHistory = (history) => {
  // 跳转到主页并加载特定历史
  router.push({ path: '/home', query: { historyId: history.id } })
}

// 确认删除历史记录
const confirmDelete = (history) => {
  ElMessageBox.confirm(
    '确定要删除此历史记录吗？',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      // 删除历史记录
      historyStore.removeHistory(history.id)
      ElMessage({
        type: 'success',
        message: '历史记录已删除',
      })
    })
    .catch(() => {
      // 用户取消删除
    })
}

// 在组件挂载时从localStorage恢复侧边栏状态
onMounted(() => {
  const savedState = localStorage.getItem('sidebarMinimized')
  if (savedState !== null) {
    isMinimized.value = savedState === 'true'
  }

  // 加载历史记录
  historyStore.loadFromLocalStorage()
})
</script>

<style scoped>
/* 页面整体布局 */
.layout-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: visible;
}

/* 侧边栏容器 */
.aside-container {
  height: 100vh;
  overflow: hidden;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  transition: width 0.3s ease-in-out;
}

/* 侧边栏菜单 */
.sidebar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #3C4A3E;
  /* 更深的绿色，与主页面形成对比 */
  border-right: 1px solid #2B3F2B;
  padding: 15px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  transition: width 0.3s ease-in-out;
}

.sidebar.minimized {
  width: 64px;
}

/* 主内容区域 */
.main-container {
  flex: 1;
  margin-left: 230px;
  width: calc(100% - 230px);
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: visible;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 当侧边栏折叠时调整主容器 */
.layout-container.minimized .main-container {
  margin-left: 64px;
  width: calc(100% - 64px);
}

/* 内容包装器 */
.content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
}

/* Logo区域 */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 15px;
  position: relative;
  height: 50px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #556B2F;
  font-weight: 600;
  transition: opacity 0.3s ease-in-out;
}

.logo-icon {
  font-size: 22px;
  margin-right: 5px;
  color: #556B2F;
}

.logo-text {
  color: #556B2F;
}

.minimize-button {
  position: absolute;
  right: 5px;
  color: #556B2F;
}

.centered-button {
  left: 50%;
  transform: translateX(-50%);
}

/* 新建项目按钮 */
.new-project-container {
  padding: 0 15px;
  margin-bottom: 20px;
  transition: padding 0.3s ease-in-out;
}

.new-project-button {
  width: 100%;
  background-color: #ffffff;
  border-color: #E8E0D0;
  color: #2B3F2B;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.new-project-button:hover {
  background-color: #EFF4ED;
  border-color: #D9E5D6;
}

.shortcut-hint {
  margin-left: auto;
  font-size: 12px;
  color: #7D7060;
  display: flex;
  align-items: center;
}

.shortcut-hint:before {
  content: "⌘";
  background-color: #F0EEE6;
  border-radius: 3px;
  padding: 1px 4px;
  margin-right: 3px;
}

.shortcut-hint:after {
  content: "K";
  background-color: #F0EEE6;
  border-radius: 3px;
  padding: 1px 4px;
  margin-left: 3px;
}

/* 底部区域 */
.bottom-section {
  margin-top: auto;
  padding: 0 15px;
  margin-bottom: 15px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.upgrade-section {
  background-color: #EFF4ED;
  border-radius: 10px;
  margin-bottom: 15px;
  border: 1px solid #D9E5D6;
}

.upgrade-title {
  font-weight: 600;
  font-size: 14px;
  color: #556B2F;
}

.upgrade-desc {
  font-size: 12px;
  color: #3C2A1A;
  line-height: 1.4;
  margin-bottom: 12px;
}

.upgrade-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #556B2F;
  border-color: #455A20;
}

.upgrade-button:hover {
  background-color: #455A20;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.auth-button {
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
  height: 40px;
}

.login-button {
  background-color: #556B2F;
  border-color: #455A20;
}

.login-button:hover {
  background-color: #455A20;
}

/* Element Plus覆盖样式 */
:deep(.el-menu) {
  border-right: none;
  background-color: #82ae89;
  /* 与侧边栏背景色一致 */
}

/* 历史记录区域 */
.history-section {
  margin: 15px 0;
  padding: 0 15px;
}

.history-title {
  font-size: 14px;
  font-weight: 600;
  color: #E8E0D0;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(232, 224, 208, 0.2);
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: 6px;
  background-color: rgba(232, 224, 208, 0.1);
  transition: all 0.2s ease-in-out;
}

.history-item-content {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  cursor: pointer;
}

.history-item:hover {
  background-color: rgba(232, 224, 208, 0.2);
}

.delete-icon {
  color: #E8E0D0;
  opacity: 0.6;
  cursor: pointer;
  font-size: 14px;
  margin-left: 5px;
  transition: all 0.2s ease-in-out;
}

.delete-icon:hover {
  opacity: 1;
  color: #ff7875;
}

.history-item-title {
  font-size: 13px;
  color: #E8E0D0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.empty-history {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7D7060;
  font-size: 12px;
  padding: 10px 15px;
  font-style: italic;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  height: 50px;
  line-height: 50px;
  color: #000000 !important;
  /* 浅色文字，提高对比度 */
  transition: all 0.3s ease-in-out;
}

:deep(.el-menu-item.is-active) {
  background-color: #556B2F;
  /* 活动项背景色 */
  color: #FFFFFF !important;
  /* 活动项文字颜色 */
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

:deep(.el-card__header) {
  padding: 10px 15px;
  border-bottom: none;
}

:deep(.el-card__body) {
  padding: 0 15px 15px;
}
</style>
