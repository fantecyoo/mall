<template>
  <div class="homeswiper">
      <swiper>
<swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
      </swiper>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    data(){
      return {
        sendloadmsg:true
      }
    },
    props:{
        banner:{
        }
    },
    methods:{
      imgload(){
        if(this.sendloadmsg){
          this.$emit('imgload')
          this.sendloadmsg=false
        }
      }
    }

}
</script>

<style scoped>

</style>