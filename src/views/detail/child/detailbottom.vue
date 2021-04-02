<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  bottom: 0;
  z-index: 13;
  background-color: #fff;
  height: 49px;
  display: flex;
  width: 100%;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-left {
  flex: 1;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
}
.bar-right> div{
    flex:1;
    line-height: 58px;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.service {
  background-position: 0 -53px;
}
.shop {
  background-position: 0 -98px;
}
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
    color: white;
  }
</style>
