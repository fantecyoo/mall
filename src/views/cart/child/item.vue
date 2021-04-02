<template>
  <div class="item" v-if="item">
    <cart-button class="button" :index="item.selected" @select="changeselect"></cart-button>
    <div class="img"><img :src="item.image" alt="" /></div>
    <div class="info">
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="calc">
        <div class="price">￥{{ item.price }}</div>
        <div class="count">x{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartButton from "./cartbutton";
export default {
  components: {
    CartButton,
  },
  props: {
    item: {},
  },
  data() {
    return {
      data: {

      },
    };
  },
  methods:{
      changeselect(){
          this.item.selected=!this.item.selected
      }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 8px;
}
.item {
  width: 94vw;
  display: flex;
  margin: 0 3vw 0 3vw;
  padding: 6px 0 6px 0;
  border-bottom: solid #ccc;
}
.img {
  flex: 1;
}
.button {
  width: 20px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  padding: 0 8px 0 8px;
}
.title {
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: black;
}
.desc {
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
}
.calc{
    display: flex;
    justify-content: space-between;
}
.price{
    color: coral;
}
</style>