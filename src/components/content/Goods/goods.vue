<template>
  <div class="goods">
      <goods-item v-for="(item,index) in content" :key=index :item='item' class="goods-item">
      </goods-item>
  </div>
</template>

<script>
import GoodsItem from './goodsitem'
export default {
    components:{
        GoodsItem
    },
    props:{
        content:{

        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:3px;
        font-size: 12px;
    text-align: center;
}
.goods-item{
    width:48%;
    padding:2px;
}
.goods-item img{
    width: 100%;
    border-radius: 5px;
}
.goods-item .title{
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
}
.goods-item .price{
    color:var(--color-high-text);
    font-size: 13px;
}
.goods-item .c-img{
    margin-left: 5px;
    position: relative;
    top:3px;
    width: 15px;
    height: 15px;
}
</style>