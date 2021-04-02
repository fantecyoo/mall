<template>
  <div class="cart">
    <nav-bar class="navbar">
      <template v-slot:center>
        <div>购物车({{ $store.state.cartList.length }})</div>
      </template>
    </nav-bar>
    <scroll class="scroll">
      <item-list>
        <item
          v-for="(item, index) in $store.state.cartList"
          :key="index"
          :item="item"
        ></item>
      </item-list>
    </scroll>
    <bottom-bar></bottom-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ItemList from './child/itemlist'
import Item from './child/item'
import Scroll from 'components/common/scroll/scroll'
import BottomBar from './child/bottombar'
export default {
  components:{
    NavBar,
    ItemList,
    Item,
    Scroll,
    BottomBar
  },
  data(){
    return{
      cartlist:[        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},
     {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},
     {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1},        {
    image: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
    title: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
    desc: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
    price: "49.00",
    iid: "1lrzvr8",
    count: 1}]
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-high-text);
  color: #fff;
  position: relative;
  z-index: 10;
}
.scroll{
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>