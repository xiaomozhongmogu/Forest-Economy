<template>
  <el-container class="app-container" :class="{ 'sidebar-minimized': isSidebarMinimized }">
    <SideBar 
      @toggle-sidebar="handleSidebarToggle" 
      @show-community="handleShowCommunity"
      @show-main="handleShowMain" 
    />
    <el-main>
      <MainContent v-if="!showCommunityContent" />
      <CommunityContent v-if="showCommunityContent" />
    </el-main>
  </el-container>
</template>

<script>
import SideBar from '../components/sideBar.vue'
import MainContent from '../components/mainContent.vue'
import CommunityContent from '../components/conmmunityContent.vue'

export default {
  components: {
    SideBar,
    MainContent,
    CommunityContent
  },
  data() {
    return {
      isSidebarMinimized: false,
      showCommunityContent: false
    }
  },
  methods: {
    handleSidebarToggle(isMinimized) {
      this.isSidebarMinimized = isMinimized;
    },
    handleShowCommunity() {
      this.showCommunityContent = true;
    },
    handleShowMain() {
      this.showCommunityContent = false;
    }
  }
}
</script>
