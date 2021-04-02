<template>
  <nav-bar>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item, index) in titles" :key="index" class="item" :class='{active:currenttitle==index}' @click='titleclick(index)'>
          {{ item }}
        </div>
      </div>
    </template>
    <template v-slot:left>
        <img src="../../../assets/img/common/back.svg" alt="" class="back" @click="back">
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  props:{
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currenttitle:0,
    };
  },
  methods:{
      titleclick(index){
          this.currenttitle=index
          this.$emit('titleclick',index)
      },
      back(){
          this.$router.back()
      }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.item {
  flex: 1;
  font-size: 15px;
}
.active{
    color: var(--color-high-text);
}
.back{
    margin-top: 11px;
}
</style>