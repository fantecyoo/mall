<template>
  <div class="bottombar">
    <div class="select">
      <cart-button @select="select" :selectall="selectall"></cart-button>
      <span>全选</span>
    </div>
    <div class="sum">
      <span>合计：￥{{ sumprice }}</span>
    </div>
    <div class="check">
      <span>去结算:{{ sumgoods }}</span>
    </div>
  </div>
</template>

<script>
import CartButton from "./bottombutton";
export default {
  components: {
    CartButton,
  },
  data() {
    return {};
  },
  computed: {
    sumprice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.selected;
        })
        .reduce((prevalue, item) => {
          return prevalue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    sumgoods() {
      return this.$store.state.cartList.filter((item) => {
        return item.selected;
      }).length;
    },
    selectall() {
      return this.sumgoods == this.$store.state.cartList.length ? true : false;
    },
  },
  methods: {
    select() {
      if (this.selectall == false) {
        for (let item of this.$store.state.cartList) {
          item.selected = true;
        }
      }
      else{
          for (let item of this.$store.state.cartList) {
          item.selected = false;
        }
      }

      console.log(this.selectall);
    },
  },
};
</script>

<style>
.bottombar {
  display: flex;
  width: 100vw;
  height: 40px;
  line-height: 40px;
}
.select {
  width: 20vw;
  display: flex;
}
.sum {
  flex: 1;
}
.check {
  width: 30vw;
  background-color: var(--color-high-text);
  color: #fff;
  text-align: center;
}
</style>