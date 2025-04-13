<template>
  <div class="back-button-container">
  <router-link to="/" class="back-button">
    <span>←</span> 返回主页
  </router-link>
</div>

  <div class="register-page">
    <div class="register-container">
      <div class="header">
        <div class="logo">
          <span class="logo-icon">🌿</span>
          <span class="logo-text">林下经济</span>
        </div>
        <h1 class="title">创建账户</h1>
        <p class="subtitle">注册一个账户以使用林下经济管理系统</p>
      </div>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label class="form-label">手机号码</label>
          <div class="phone-container">
            <input
              type="tel"
              class="form-input phone-input"
              placeholder="请输入手机号码"
              v-model="formData.phone"
              :class="{ 'error-input': errors.phone }"
            >
            <button
              type="button"
              class="code-button"
              @click="getVerificationCode"
              :disabled="cooldown > 0"
            >
              {{ cooldown > 0 ? `${cooldown}秒后重试` : '获取验证码' }}
            </button>
          </div>
          <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
        </div>

        <div class="form-group">
          <label class="form-label">验证码</label>
          <input
            type="text"
            class="form-input"
            placeholder="请输入验证码"
            v-model="formData.verificationCode"
            :class="{ 'error-input': errors.verificationCode }"
          >
          <p v-if="errors.verificationCode" class="error-message">{{ errors.verificationCode }}</p>
        </div>

        <div class="form-group">
          <label class="form-label">用户名</label>
          <input
            type="text"
            class="form-input"
            placeholder="请设置用户名"
            v-model="formData.username"
            :class="{ 'error-input': errors.username }"
          >
          <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
        </div>

        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            type="password"
            class="form-input"
            placeholder="请设置密码"
            v-model="formData.password"
            :class="{ 'error-input': errors.password }"
          >
          <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
        </div>

        <div class="form-group">
          <label class="form-label">确认密码</label>
          <input
            type="password"
            class="form-input"
            placeholder="请再次输入密码"
            v-model="formData.confirmPassword"
            :class="{ 'error-input': errors.confirmPassword }"
          >
          <p v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</p>
        </div>

        <button type="submit" class="register-button" :disabled="isSubmitting">
          {{ isSubmitting ? '注册中...' : '注册' }}
        </button>

        <div class="agreement">
          点击"注册"，即表示您同意<a href="#" @click.prevent="openAgreement('terms')">《用户协议》</a>和<a href="#" @click.prevent="openAgreement('privacy')">《隐私政策》</a>，我们将为您提供最优质的林下经济管理服务
        </div>

        <div class="login-link">
          已有账户？<a href="#" @click.prevent="goToLogin">立即登录</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      formData: {
        phone: '',
        verificationCode: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      errors: {
        phone: '',
        verificationCode: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      cooldown: 0,
      cooldownTimer: null,
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

      // 验证码验证
      if (!this.formData.verificationCode) {
        this.errors.verificationCode = '请输入验证码';
        isValid = false;
      } else if (this.formData.verificationCode.length !== 6) {
        this.errors.verificationCode = '验证码应为6位数字';
        isValid = false;
      }

      // 用户名验证
      if (!this.formData.username) {
        this.errors.username = '请输入用户名';
        isValid = false;
      } else if (this.formData.username.length < 3) {
        this.errors.username = '用户名长度不能少于3个字符';
        isValid = false;
      }

      // 密码验证
      if (!this.formData.password) {
        this.errors.password = '请设置密码';
        isValid = false;
      } else if (this.formData.password.length < 8) {
        this.errors.password = '密码长度不能少于8个字符';
        isValid = false;
      }

      // 确认密码验证
      if (!this.formData.confirmPassword) {
        this.errors.confirmPassword = '请确认密码';
        isValid = false;
      } else if (this.formData.confirmPassword !== this.formData.password) {
        this.errors.confirmPassword = '两次输入的密码不一致';
        isValid = false;
      }

      return isValid;
    },
    getVerificationCode() {
      if (this.cooldown > 0) return;

      // 验证手机号
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!this.formData.phone) {
        this.errors.phone = '请输入手机号码';
        return;
      } else if (!phoneRegex.test(this.formData.phone)) {
        this.errors.phone = '请输入有效的手机号码';
        return;
      }

      // 开始倒计时
      this.cooldown = 60;
      this.cooldownTimer = setInterval(() => {
        this.cooldown--;
        if (this.cooldown <= 0) {
          clearInterval(this.cooldownTimer);
        }
      }, 1000);

      // 这里可以添加获取验证码的API调用
      console.log('获取验证码，手机号:', this.formData.phone);

      // 模拟API调用成功
      this.$message({
        type: 'success',
        message: '验证码已发送到您的手机'
      });
    },
    handleRegister() {
      if (!this.validateForm()) return;

      this.isSubmitting = true;

      // 这里可以添加注册API调用
      console.log('提交注册表单:', this.formData);

      // 模拟API调用过程
      setTimeout(() => {
        this.isSubmitting = false;

        // 模拟成功注册
        this.$message({
          type: 'success',
          message: '注册成功！'
        });

        // 注册成功后跳转到登录页
        setTimeout(() => {
          this.goToLogin();
        }, 1500);
      }, 2000);
    },
    openAgreement(type) {
      const title = type === 'terms' ? '用户协议' : '隐私政策';
      this.$dialog.alert({
        title: title,
        message: `这是${title}的内容...`
      });
    },
    goToLogin() {
      this.$router.push('/login');
    }
  },
  beforeUnmount() {
    // 清除定时器
    if (this.cooldownTimer) {
      clearInterval(this.cooldownTimer);
    }
  }
}
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F8F7F2;
  padding: 20px;
}

.register-container {
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

.phone-container {
  display: flex;
  gap: 10px;
}

.phone-input {
  flex: 1;
}

.code-button {
  width: 110px;
  background-color: #EFF4ED;
  border: 1px solid #D9E5D6;
  border-radius: 8px;
  color: #556B2F;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.code-button:hover:not(:disabled) {
  background-color: #D9E5D6;
}

.code-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.register-button {
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

.register-button:hover:not(:disabled) {
  background-color: #455A20;
}

.register-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.agreement {
  font-size: 12px;
  color: #5A4A3A;
  text-align: center;
  margin-top: 20px;
  line-height: 1.4;
}

.agreement a {
  color: #556B2F;
  text-decoration: none;
}

.agreement a:hover {
  text-decoration: underline;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #5A4A3A;
}

.login-link a {
  color: #556B2F;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
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
