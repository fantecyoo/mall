<template>
  <div class="home">
    <nav-bar class="color"><template v-slot:center>购物街</template></nav-bar>
    <tab-control
      class="tab-control toptab"
      :content="['流行', '新款', '精选']"
      @goodsclick="changeGoods"
    v-show="showtab"
     ref="tab1"></tab-control>
    <scroll
      class="content"
      ref="wrapper"
      @scroll="showbacktop"
      @pullingup="addgoods"
    >
      <home-swiper :banner="list" @imgload='load'></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        class="tab-control"
        :content="['流行', '新款', '精选']"
        @goodsclick="changeGoods"
       ref='tab2'></tab-control>
      <goods :content="goods[currenttype].list"></goods>
    </scroll>
    <back-top @click.native="backtotop" v-show="Active"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeSwiper from "./clidcomponets/homeswiper";
import HomeRecommend from "./clidcomponets/homerecommend";
import HomeFeature from "./clidcomponets/homefeature";
import TabControl from "components/content/Tabcontrol/tabcontrol";
import Goods from "components/content/Goods/goods";
import Scroll from "components/common/scroll/scroll";
import BackTop from "components/content/BackTop/backtop";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    Goods,
    Scroll,
    BackTop,
  },
  data() {
    return {
      list: [],
      recommend: {
        type: Array,
      },
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currenttype: "pop",
      Active: false,
      tabcontrolposition:0,
      showtab:false,
      saveY:0,
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.list = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
      // console.log(this.recommend);
    }),
      this.HomeGoods("pop");
    this.HomeGoods("new");
    this.HomeGoods("sell");
  },
  activated(){
    this.$refs.wrapper.scroll.refresh()
    this.$refs.wrapper.scroll.scrollTo(0,this.saveY)
  },


  methods: {
    HomeGoods(type) {
      this.goods[type].page++;
      getHomeGoods(type, this.goods[type].page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
      });
    },
    

    changeGoods(index) {
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      };
      this.$refs.tab1.currentindex=index
      this.$refs.tab2.currentindex=index

    },
    backtotop() {
      this.$refs.wrapper.scroll.scrollTo(0, 0);
    },
    showbacktop(position) {
      this.Active = -position.y > 1000;
      this.showtab= this.tabcontrolposition<-position.y
      this.saveY=position.y
      // console.log(this.showtab)
    },
    addgoods() {
      console.log("加载更多");
      this.HomeGoods(this.currenttype);
      this.$refs.wrapper.scroll.finishPullUp();
    },
    load(){
      // console.log(this.$refs.tabcontrol.$el.offsetTop)
      this.tabcontrolposition=this.$refs.tab2.$el.offsetTop

    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
.color {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  top:44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.toptab{
  position: fixed;
  z-index: 10;

}
</style>
