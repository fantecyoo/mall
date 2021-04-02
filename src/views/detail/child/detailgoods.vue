<template>
  <div v-if="Object.keys(gooddetail).length !== 0" class="detailgoods">
    <div class="title">{{ gooddetail.title }}</div>
    <div class="price">
      <span class="nowprice">{{ gooddetail.price }}</span>
      <span class="oldprice">{{ gooddetail.oldprice }}</span>
      <span
        class="discount"
        :style="{ 'background-color': gooddetail.discountcolor }"
        >{{ gooddetail.discount }}</span
      >
    </div>
    <div class="information">
      <span class="sales">{{ gooddetail.sales }}</span>
      <span class="collect">{{ gooddetail.collect }}</span>
      <span class="service1">{{ gooddetail.services[2].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in gooddetail.services.length - 1"
        :key="index"
      >
        <img :src="gooddetail.services[index - 1].icon" />
        <span>{{ gooddetail.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gooddetail: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.detailgoods {
      margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.title {
  padding-top: 5px;
  padding-bottom: 5px;
  color: #222;
}
.nowprice {
  color: var(--color-high-text);
  font-size: 24px;
}
.oldprice {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  /* background-color: var(--color-high-text); */
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -7px;
}
.information {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  overflow: hidden;
}

.info-service-item img {
      width: 14px;
    height: 14px;
    position: relative;
    top:2px
}
.info-service-item span {
    font-size: 13px;
    color: #222;
  }
</style>