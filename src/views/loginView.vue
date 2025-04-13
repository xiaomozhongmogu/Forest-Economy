<template>
  <div class="back-button-container">
    <router-link to="/" class="back-button">
      <span>←</span> 返回主页
    </router-link>
  </div>

  <div class="login-page">
    <div class="login-container">
      <div class="header">
        <div class="logo">
          <span class="logo-icon">🌿</span>
          <span class="logo-text">林下经济</span>
        </div>
        <h1 class="title">欢迎回来</h1>
        <p class="subtitle">登录您的账户以继续使用林下经济管理系统</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="form-label">手机号码</label>
          <input
            type="tel"
            class="form-input"
            placeholder="请输入手机号码"
            v-model="formData.phone"
            :class="{ 'error-input': errors.phone }"
          >
          <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
        </div>

        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            type="password"
            class="form-input"
            placeholder="请输入密码"
            v-model="formData.password"
            :class="{ 'error-input': errors.password }"
          >
          <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="formData.rememberMe">
            <span>记住我</span>
          </label>
          <a href="#" class="forgot-password" @click.prevent="handleForgotPassword">忘记密码？</a>
        </div>

        <button type="submit" class="login-button" :disabled="isSubmitting">
          {{ isSubmitting ? '登录中...' : '登录' }}
        </button>

        <div class="register-link">
          还没有账户？<a href="#" @click.prevent="goToRegister">立即注册</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      formData: {
        phone: '',
        password: '',
        rememberMe: false
      },
      errors: {
        phone: '',
        password: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      // 重置错误消息
      for (let key in this.errors) {
        this.errors[key] = '';
      }

      // 手机号验证
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!this.formData.phone) {
        this.errors.phone = '请输入手机号码';
        isValid = false;
      } else if (!phoneRegex.test(this.formData.phone)) {
        this.errors.phone = '请输入有效的手机号码';
        isValid = false;
      }

      // 密码验证
      if (!this.formData.password) {
        this.errors.password = '请输入密码';
        isValid = false;
      }

      return isValid;
    },
    handleLogin() {
      if (!this.validateForm()) return;

      this.isSubmitting = true;

      // 这里可以添加登录API调用
      console.log('提交登录表单:', this.formData);

      // 模拟API调用过程
      setTimeout(() => {
        this.isSubmitting = false;

        // 模拟成功登录
        this.$message({
          type: 'success',
          message: '登录成功！'
        });

        // 登录成功后跳转到首页
        setTimeout(() => {
          this.$router.push('/');
        }, 1500);
      }, 2000);
    },
    handleForgotPassword() {
      this.$message({
        type: 'info',
        message: '忘记密码功能正在开发中...'
      });
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F8F7F2;
  padding: 20px;
}

.login-container {
  background-color: #FDFBF7;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 420px;
  padding: 35px;
  border: 1px solid #E8E0D0;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 36px;
  margin-right: 10px;
}

.logo-text {
  font-size: 28px;
  color: #556B2F;
  font-weight: 600;
}

.title {
  font-size: 20px;
  color: #2B3F2B;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 14px;
  color: #5A4A3A;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  color: #3C2A1A;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #E8E0D0;
  border-radius: 8px;
  font-size: 14px;
  color: #2B3F2B;
  background-color: #ffffff;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #98C9A3;
  outline: none;
}

.error-input {
  border-color: #D75650;
}

.error-message {
  color: #D75650;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 0;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
}

.remember-me {
  display: flex;
  align-items: center;
  color: #5A4A3A;
  cursor: pointer;
}

.remember-me input {
  margin-right: 8px;
}

.forgot-password {
  color: #556B2F;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #556B2F;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;
}

.login-button:hover:not(:disabled) {
  background-color: #455A20;
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.register-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #5A4A3A;
}

.register-link a {
  color: #556B2F;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}

.back-button-container {
  text-align: left;
  margin-bottom: 20px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  color: #556B2F;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.back-button:hover {
  text-decoration: underline;
}

.back-button span {
  margin-right: 5px;
}
</style>
