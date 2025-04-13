<template>
  <div class="sidebar" :class="{ 'minimized': isMinimized }">
    <!-- Logo区域 -->
    <div class="logo-container">
      <div class="logo" v-if="!isMinimized">
        <span class="logo-icon">🌿</span>
        <span class="logo-text">林下经济</span>
      </div>
      <el-button v-else type="text" class="minimize-button centered-button" @click="toggleMinimize">
        ➔
      </el-button>
      <el-button v-if="!isMinimized" type="text" class="minimize-button" @click="toggleMinimize">
        ←
      </el-button>
    </div>

    <!-- 新建项目 -->
    <div class="new-project-container">
      <el-button class="new-project-button">
        <span v-if="!isMinimized" style="margin-left: 10px;">新建项目</span>
        <span v-else class="add-icon">+</span>
        <span v-if="!isMinimized" class="shortcut-hint"></span>
      </el-button>
    </div>

    <!-- 导航菜单 -->
    <div class="nav-menu">
      <div class="nav-item">
        <div class="nav-icon">🏠</div>
        <div class="nav-text">首页</div>
      </div>
      <div class="nav-item">
        <div class="nav-icon">💬</div>
        <div class="nav-text">社区</div>
      </div>
      <div class="nav-item">
        <div class="nav-icon">💰</div>
        <div class="nav-text">我的资产</div>
      </div>
      <div class="nav-item">
        <div class="nav-icon">📚</div>
        <div class="nav-text">资源库</div>
      </div>
      <!-- 项目库子菜单 -->
      <div class="sub-menu">
        <div class="sub-item">林下食用菌培育技术</div>
        <div class="sub-item">中国各省林下经济产值</div>
        <div class="sub-item">林下养殖最佳实践案例</div>
        <div class="sub-item">林下药材种植指南</div>
        <div class="sub-item">林下经济政策扶持</div>
      </div>
      <div class="nav-item">
        <div class="nav-icon">🔍</div>
        <div class="nav-text">数据管理与分析</div>
      </div>

      
    </div>

    <!-- 底部区域 -->
    <div class="bottom-section">
      <!-- 升级区域 -->
      <div class="upgrade-section">
        <div class="upgrade-title">不知道如何使用？</div>
        <div class="upgrade-desc">
          点击用户手册
          <br />
          开始使用先进分析工具和模型。
        </div>
        <el-button type="primary" class="upgrade-button">
          <span>↗</span> 用户手册
        </el-button>
      </div>

      <!-- 修改后的登录/注册按钮部分 -->
<div class="auth-buttons">

  <!-- 为了简介界面，暂时隐藏注册按钮 -->
  <!-- <router-link to="/register" class="button-link">
    <el-button type="primary" class="auth-button register-button" size="large">
      注册
    </el-button>
  </router-link> -->

  <router-link to="/login" class="button-link">
    <el-button type="text" class="auth-button login-button" size="large">
      登录
    </el-button>
  </router-link>
  
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForestEconomySidebar',
  data() {
    return {
      isMinimized: false,
      newProject: ''
    }
  },
  methods: {
    toggleMinimize() {
      this.isMinimized = !this.isMinimized
      this.$emit('toggle-sidebar', this.isMinimized)
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 100vh;
  background-color: #FDFBF7; /* 奶油色背景 */
  border-right: 1px solid #E8E0D0;
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.minimized {
  width: 60px;
  padding: 15px 10px;
}

.sidebar.minimized .logo-text,
.sidebar.minimized .nav-text,
.sidebar.minimized .sub-menu,
.sidebar.minimized .bottom-section {
  display: none;
}

.sidebar.minimized .search-box,
.sidebar.minimized .nav-item,
.sidebar.minimized .auth-buttons {
  padding: 8px 5px;
}

.sidebar.minimized .new-project-container {
  display: block;
  padding: 0;
  margin-bottom: 15px;
}

.sidebar.minimized .new-project-button {
  padding: 8px;
  justify-content: center;
}

/* 添加以下CSS样式 */
.sidebar.minimized .logo-container {
  justify-content: center;
  padding-left: 0;
  margin-bottom: 15px;
}

.sidebar.minimized .minimize-button {
  position: relative;
  right: 0;
  margin-top: 10px; /* 在logo下方添加一些间距 */
  display: block;
}

.sidebar.minimized .logo {
  justify-content: center;
}

.add-icon {
  font-size: 18px;
  font-weight: bold;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 10px;
  position: relative;
}

.centered-button {
  position: static;
  margin: 0 auto;
  display: block;
  font-size: 16px;
}

.minimize-button {
  font-size: 14px;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s;
  position: absolute;
  right: -5px;
}

.minimize-button:hover {
  background-color: #EFF4ED;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #556B2F; /* 橄榄绿 */
  font-weight: 600;
}

.logo-icon {
  font-size: 22px;
  margin-right: 5px;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #E8E0D0;
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 20px;
}

.keyboard-shortcuts {
  display: flex;
  gap: 3px;
}

.keyboard-shortcuts span {
  background-color: #F0EEE6;
  border-radius: 3px;
  padding: 1px 4px;
  font-size: 12px;
  color: #7D7060;
}

.nav-menu {
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 5px;
  color: #2B3F2B; /* 暗绿色文字 */
}

.nav-item:hover {
  background-color: #EFF4ED;
}

.nav-icon {
  margin-right: 10px;
  font-size: 16px;
  width: 20px;
  text-align: center;
  color: #556B2F; /* 橄榄绿图标 */
}

.nav-text {
  font-size: 14px;
}

.sub-menu {
  margin-left: 30px;
  margin-top: 5px;
}

.sub-item {
  padding: 6px 10px;
  font-size: 13px;
  color: #5A4A3A;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2px;
}

.sub-item:hover {
  background-color: #EFF4ED;
  color: #3C2A1A; /* 深木色 */
}

.bottom-section {
  margin-top: auto;
}

.upgrade-section {
  background-color: #EFF4ED;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #D9E5D6;
}

.upgrade-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  color: #556B2F; /* 橄榄绿标题 */
}

.upgrade-desc {
  font-size: 12px;
  color: #3C2A1A; /* 深木色文字 */
  line-height: 1.4;
  margin-bottom: 12px;
}

.upgrade-button {
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.upgrade-button:hover {
  background-color: #C78A3E;
}

.upgrade-button span {
  margin-right: 5px;
}

/* 新增登录/注册按钮样式 */
.auth-buttons {
  display: flex;
  flex-direction: column; /* 改为纵向排列 */
  gap: 8px; /* 按钮之间的间距 */
  padding: 0;
  margin-bottom: 15px;
}

.register-button, .login-button {
  width: 48%;
  padding: 8px 0;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.register-button {
  background-color: #556B2F;
  color: white;
  border: none;
}

.register-button:hover {
  background-color: #455A20;
}

.login-button {
  background-color: #556B2F;
  color: white;
  border: none;
}

.login-button:hover {
  background-color: #455A20;
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
  color: #5A4A3A;
}

.download-icon {
  font-size: 16px;
  color: #556B2F; /* 橄榄绿图标 */
}

.new-project-container {
  margin-bottom: 20px;
  padding: 0 10px;
}

.new-project-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #E8E0D0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: #2B3F2B;
  transition: background-color 0.2s;
}

.new-project-button:hover {
  background-color: #EFF4ED;
}

.shortcut-hint {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7D7060;
  margin-left: 50px;
}

.shortcut-hint:before {
  content: "⌘";
  margin-right: 3px;
  background-color: #F0EEE6;
  border-radius: 3px;
  padding: 1px 4px;
}

.shortcut-hint:after {
  content: "K";
  background-color: #F0EEE6;
  border-radius: 3px;
  padding: 1px 4px;
  margin-left: 3px;
}

.button-link {
  width: 100%;
  display: block;
  text-decoration: none;
}

.auth-button {
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
  height: 40px; /* 设置合适的高度 */
}

.register-button {
  background-color: #556B2F; /* Element Plus 默认主色，或使用 #556B2F 保持原有风格 */
  border: none;
}

.login-button {
  background-color: #556B2F;
  color: white;
  border: none;
}

.login-button:hover {
  background-color: #455A20;
}
</style>
