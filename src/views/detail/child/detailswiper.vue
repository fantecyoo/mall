<template>
  <swiper>
    <swiper-item v-for="(item,index) in topimg" :key=index>
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: { Swiper, SwiperItem },
  props:{
      topimg:{}
  }
};
</script>

<style>
</style>