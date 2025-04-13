<template>
    <div class="login-container">
        <div class="login-box">
            <h2>登录</h2>
            <form @submit.prevent="handleLogin">
                <div class="form-item">
                    <label for="username">用户名</label>
                    <input type="text" id="username" v-model="login_Form.username" placeholder="请输入用户名" required>
                </div>
                <div class="form-item">
                    <label for="password">密码</label>
                    <input type="password" id="password" v-model="login_Form.password" placeholder="请输入密码" required>
                </div>
                <button type="submit">登录</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const login_Form = ref({
    username: '',
    password: ''
});

const handleLogin = () => {
    console.log('登录信息', login_Form.value);
    // 登录成功后跳转到首页
    router.push('/');
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #FDFBF7;
}

.login-box {
    width: 400px;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.login-box h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
    font-weight: 500;
}

.form-item {
    margin-bottom: 24px;
}

.form-item label {
    display: block;
    margin-bottom: 8px;
    color: #666;
    font-size: 14px;
}

.form-item input {
    width: 100%;
    padding: 12px;
    border: 1px solid #E8E8E8;
    border-radius: 6px;
    font-size: 14px;
    transition: all 0.3s;
}

.form-item input:focus {
    border-color: #409eff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.1);
}

button {
    width: 100%;
    padding: 12px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

button:hover {
    background-color: #66b1ff;
    transform: translateY(-1px);
}

button:active {
    transform: translateY(0);
}
</style>
