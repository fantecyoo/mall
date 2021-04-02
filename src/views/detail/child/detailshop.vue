<template>
  <div class="shop" v-if="Object.keys(shop).length !== 0">
    <div class="logo">
      <img :src="shop.logo" alt="" />
      <span class="name">{{ shop.name }}</span>
    </div>
    <div class="other">
      <div class="left">
        <div class="sales">
          <div class="count">{{sellCountFilter}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="goods">
          <div class="count">{{ shop.goodsCount }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in shop.score" :key="index" class="rightitem">
          <span class='rightname'>{{ item.name }}</span>
          <span class="score">{{ item.score }}</span>
          <span  class="Better">{{item.isBetter ? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {},
  },
  computed:{
    sellCountFilter(){
        if (this.shop.sells < 10000) return this.shop.sells;
        return (this.shop.sells/10000).toFixed(1) + '万'
      }
  }
};
</script>

<style scoped>
.shop {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.logo {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.logo img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.logo .name {
  margin-left: 10px;
  vertical-align: center;
}
.other {
  display: flex;
}
.left {
  width: 50%;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  justify-content: space-around;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sales {
  vertical-align: center;
}
.count {
  font-size: 18px;
  width: 100%;
}
.text {
  margin-top: 10px;
  font-size: 12px;
}
.right{
    width: 50%;
    padding-left: 30px;
    font-size: 13px;
}
.rightitem{
    display: flex;
    justify-content: space-between;
}
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>