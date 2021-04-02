<template>
  <div id="detail">
    <add-note class="add-note" v-if="addnote"></add-note>
    <detail-navbar class="detail-navbar" @titleclick="tclick" ref="nav"></detail-navbar>
    <scroll class="detail-scroll" ref="scroll" @detailscroll="scroll">
      <detail-swiper :topimg="topImage" class="detail-swiper"></detail-swiper>
      <detail-goods :gooddetail="goods"></detail-goods>
      <detail-shop :shop="shopdetail"></detail-shop>
      <detail-info :detail-Info="goodsinfo" @imgload="load"></detail-info>
      <detail-param :paramInfo="goodsparam" ref="param"></detail-param>
    </scroll>
    <detail-bottom @addToCart='addtocart'></detail-bottom>
  </div>
</template>

<script>
import DetailNavbar from "./child/detailnvabar";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import DetailSwiper from "./child/detailswiper";
import DetailGoods from "./child/detailgoods";
import DetailShop from "./child/detailshop";
import Scroll from "components/common/scroll/scroll";
import DetailInfo from "./child/detailinfo";
import DetailParam from "./child/detailparam";
import DetailBottom from "./child/detailbottom"
import AddNote from "./child/addnote"
import Toast from "components/common/toast/toast"
export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    Scroll,
    DetailInfo,
    DetailParam,
    DetailBottom,
    AddNote,
    Toast
  },
  data() {
    return {
      id: null,
      topImage: [],
      goods: {},
      shopdetail: {},
      goodsinfo: {},
      goodsparam: {},
      currentposition: [44],
      a:{},
      addnote:false
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    getDetail(this.id).then((res) => {
      const data1 = res.data.result;
      this.topImage = data1.itemInfo.topImages;
      this.goods = new Goods(data1.itemInfo, data1.columns, data1.shopInfo);
      this.shopdetail = new Shop(data1.shopInfo);
      this.goodsinfo = data1.detailInfo;
      this.goodsparam = new GoodsParam(
        data1.itemParams.info,
        data1.itemParams.rule
      );
    });
    this.a=this.debounce(this.print1,500)
  },
  methods: {
    tclick(index) {
      console.log("点击" + index);
      this.$refs.scroll.scroll.scrollTo(0, -this.currentposition[index] + 44);  
    },
    load() {
      this.a()
    },
    debounce(func, wait) {
      let timeout = null;
      return function () {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
          func.apply(this);
        }, wait);
      };
    },
    print1() {
      this.currentposition.push(this.$refs.param.$el.offsetTop);
      console.log('最后'+this.$refs.param.$el.offsetTop)
    },
    scroll(position){
      if(-this.currentposition[1]+46>position.y) this.$refs.nav.currenttitle=1
      else if(this.$refs.nav.currenttitle) this.$refs.nav.currenttitle=0
    },
    addtocart(){
      const product={}
      product.image= this.topImage[0]
      product.title=this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowprice
      product.iid=this.id
      this.$store.commit('addCartList',product)
      this.addnote=true;
      setTimeout(()=>{
        this.addnote=false
      },1000)
    }
  },
};
</script>

<style>
.detail-swiper {
  height: 280px;
}
#detail {
  height: 100vh;
  position: relative;
  z-index: 11;
  background-color: #fff;
}
.detail-scroll {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.detail-navbar {
  position: relative;
  z-index: 12;
  background-color: #fff;
}
.addnote{
  position:absolute;
  z-index: 20;
  top:50vh;
  left:35vw;
}
</style>