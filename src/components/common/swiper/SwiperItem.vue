<template>
  <div class="slide">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.slide{
    width:100%;
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
}

.slide img{

    width:100%;
}

</style>