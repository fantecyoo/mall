<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../../../assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
    height: 49px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  z-index: 9;
}
</style>