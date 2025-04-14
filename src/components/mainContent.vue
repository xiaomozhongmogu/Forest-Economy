<template>
  <div class="search-content">
    <!-- 页面标题 -->
    <div class="search-title">
      <h1>您想了解哪些林下经济知识？</h1>
    </div>

    <!-- 搜索区域 -->
    <div class="search-container">
      <div class="search-input-wrapper">
        <input type="text" class="search-input" placeholder="随意提问..." />

        <!-- 操作图标区 -->
        <div class="search-actions">
          <button class="action-button">
            <span class="action-icon">⚙</span>
          </button>
          <button class="action-button">
            <span class="action-icon">😊</span>
          </button>
          <button class="action-button">
            <span class="action-icon">🔗</span>
          </button>
          <button class="search-button">
            <span class="search-icon">🔍</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 推荐搜索或最近搜索（可选）-->
    <div class="suggested-searches">
      <h3>热门问题</h3>
      <div class="suggested-items">
        <div class="suggested-item">林下经济有哪些主要类型？</div>
        <div class="suggested-item">如何评估林下种植的经济效益？</div>
        <div class="suggested-item">林下养蜂的最佳实践是什么？</div>
        <div class="suggested-item">林下食用菌培育的环境要求有哪些？</div>
      </div>
    </div>

    <!-- 底部状态或版权信息 -->
    <div class="footer">
      <div class="footer-links">
        <a href="#" class="footer-link">关于我们</a>
        <a href="#" class="footer-link">联系方式</a>
        <a href="#" class="footer-link">使用条款</a>
        <a href="#" class="footer-link">隐私政策</a>
      </div>
      <div class="copyright">
        © 2025 林下经济研究中心
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForestEconomyMainContent',
}
</script>

<style scoped>
/* 搜索内容区域样式 */
.search-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: #FDFBF7;
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  overflow-y: auto;
  width: 100%;
}

.search-title {
  margin-bottom: 40px;
  text-align: center;
  margin-top: 60px; /* 增加上边距 */
}

.search-title h1 {
  font-size: 32px;
  font-weight: 600;
  color: #3C2A1A; /* 深木色文字 */
}

/* 搜索容器样式 */
.search-container {
  /* 居中 */
  width: 100%;
  margin: 0 auto;
  margin-top: 60px; /* 增加上边距 */
}

/* 搜索输入框样式 */
.search-input-wrapper {
  display: flex;
  position: relative;
  width: 100%;
  border: 1px solid #E8E0D0;
  border-radius: 12px;
  background-color: #FFFFFF;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 搜索输入框样式 */
.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #3C2A1A; /* 深木色文字 */
  background: transparent;
}

/* 搜索输入框占位符样式 */
.search-input::placeholder {
  color: #A89E8D;
}

/* 搜索操作图标区样式 */
.search-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 搜索操作图标区样式 */
.action-button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #556B2F; /* 橄榄绿图标 */
  font-size: 18px;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.action-button:hover {
  background-color: #EFF4ED;
}

.search-button {
  background-color: #556B2F; /* 橄榄绿按钮 */
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #475A27;
}

/* 推荐搜索或最近搜索样式 */
.suggested-searches {
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
}

.suggested-searches h3 {
  font-size: 16px;
  font-weight: 600;
  color: #3C2A1A; /* 深木色文字 */
  margin-bottom: 16px;
  text-align: center; /* 确保标题居中 */
}

.suggested-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.suggested-item {
  padding: 12px 16px;
  background-color: #EFF4ED;
  border: 1px solid #D9E5D6;
  border-radius: 10px;
  color: #3C2A1A; /* 深木色文字 */
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.suggested-item:hover {
  background-color: #D9E5D6;
  border-color: #98C9A3; /* 薄荷绿边框 */
}

.footer {
  margin-top: 60px;
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.footer-link {
  color: #5A4A3A;
  text-decoration: none;
  font-size: 14px;
}

.footer-link:hover {
  color: #D9984A; /* 秋叶橙高亮 */
}

.copyright {
  color: #8A7A6A;
  font-size: 12px;
}

/* 添加响应式布局支持 */
@media (max-width: 768px) {
  .search-container, .suggested-searches {
    padding: 0 15px;
  }

  .suggested-items {
    grid-template-columns: 1fr; /* 在小屏幕上改为单列 */
  }
}
</style>
