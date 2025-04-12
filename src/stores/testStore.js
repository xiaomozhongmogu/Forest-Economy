import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore('test', () => {

  const token = ref('')

  const setToken = (newToken) => {
    token.value = newToken
  }

  const removeToken = () => {
    token.value = ''
  }

  return {
    token,
    setToken,
    removeToken
  }
}, {
  persist: true
})
