import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const userInfo = ref({
    name: '',
    phone: ''
  })
  const rememberMe = ref(false)

  function login(userData, remember = false) {
    rememberMe.value = remember
    isLoggedIn.value = true
    userInfo.value = userData

    const storeData = {
      userInfo: userData,
      isLoggedIn: true
    }

    if (remember) {
      localStorage.setItem('user', JSON.stringify(storeData))
    } else {
      sessionStorage.setItem('user', JSON.stringify(storeData))
    }
  }

  function logout() {
    isLoggedIn.value = false
    userInfo.value = {
      name: '',
      phone: ''
    }
    rememberMe.value = false

    // 清除存储
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
  }

  function init() {
    let userData = localStorage.getItem('user')
    if (!userData) {
      userData = sessionStorage.getItem('user')
    }

    if (userData) {
      const data = JSON.parse(userData)
      userInfo.value = data.userInfo
      isLoggedIn.value = data.isLoggedIn
      rememberMe.value = !!(localStorage.getItem('user'))
    }
  }

  return { isLoggedIn, userInfo, rememberMe, login, logout, init }
})
