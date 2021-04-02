<template>
  <div class="tabbar-item" @click="itemclick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="Activecolor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive
    };
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
  props: {
    path: String,
    activecolor: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == 0;
    },
    Activecolor() {
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
};
</script>

<style>
.tabbar-item {
  margin-top: 5px;
  flex: 1;
  text-align: center;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
/* .isactive{
    color:red;
} */
</style>