<template>
  <div id="app">
    <!-- <keep-alive><router-view></router-view></keep-alive> -->
      <router-view v-slot="{ Component }">
    <keep-alive exclude="Detail">
      <component :is="Component" />
    </keep-alive>
  </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/Maintabbar/maintabbar'
export default {
  components:{
    MainTabBar
  },
  filters:{
    sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
  }
}
</script>

<style>
@import url('assets/css/base.css');


</style>
