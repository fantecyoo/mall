<template>
  <div class="goodsitem" @click="click">
          <img :src="item.show.img" alt="">
      <div>
          <p class="title">{{item.title}}</p>
          <div>          <span class="price">￥{{item.price}}</span>
          <img class="c-img" src="../../../assets/img/common/collect.svg" alt="">
          <span class="collect">{{item.cfav}}</span></div>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        item:{

        }
    },
    methods:{
        click(){
            this.$router.push('/detail/'+this.item.iid)
        }
    }
}
</script>

<style>

</style>