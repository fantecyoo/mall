<template>
  <div id="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <div class="indicator" v-show="bannerlength>1">
      <div class="indicator-item" v-for="(item,index) in bannerlength" :key=index :class="{active:index===currentindex-1}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerstyle: {},
      bannerlength: 0,
      currentindex: 1,
      width: 0,
      transforming: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 200);
  },
  methods: {
    handleDom() {
      var banner = document.querySelector(".swiper");
      var item = banner.getElementsByClassName("slide");
      this.bannerlength = item.length;

      if(this.bannerlength>1){
              this.bannerstyle = banner.style;
      this.width = banner.offsetWidth;
      var a = item[0];
      let cloneFirst = item[0].cloneNode(true);
      let cloneLast = item[this.bannerlength - 1].cloneNode(true);
      banner.insertBefore(cloneLast, item[0]);
      banner.appendChild(cloneFirst);
      this.transform(-this.width);
      }
    },
    startTimer() {
      this.timer = window.setInterval(() => {
        this.currentindex++;
        this.bannerstyle.transition = "transform 300ms";
        this.transforming = true;
        this.transform(-this.currentindex * this.width);
        this.checkindex();
        this.transforming = false;
      }, 3000);
    },
    stopTimer() {
      window.clearInterval(this.timer);
    },
    transform(position) {
      this.bannerstyle.transform = `translate3d(${position}px, 0, 0)`;
      this.bannerstyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.bannerstyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    checkindex() {
      setTimeout(() => {
        if (this.currentindex == this.bannerlength + 1) {
          this.bannerstyle.transition = "0ms";
          this.transform(-this.width);
          this.currentindex = 1;
        } else if (this.currentindex == 0) {
          this.bannerstyle.transition = "0ms";
          this.transform(-this.bannerlength * this.width);
          this.currentindex = this.bannerlength;
        }
      }, 300);
    },
    touchStart(e) {
      if (this.transforming) {
        return;
      }
      this.stopTimer();
      this.startposition = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentposition = e.touches[0].pageX;
      this.movement = this.currentposition - this.startposition;
      this.transform(-(this.currentindex*this.width)+this.movement);
    },
    touchEnd() {
      var absmovement = Math.abs(this.movement);
      if (this.movement == 0) return;
      else if (this.movement > 0 && absmovement > this.width * 0.25) {
        this.currentindex--;
      } else if (this.movement < 0 && absmovement > this.width * 0.25) {
        this.currentindex++;
      }
      this.bannerstyle.transition = "transform 300ms";
      this.transform(-this.currentindex * this.width);
      this.checkindex();
      this.startTimer()
    },
  },
};
</script>

<style scoped>
#hy-swiper {
  overflow: hidden;
  /* padding-top: 44px; */
}
.swiper {
  width: 100%;
  height: 100%;
  display: flex;
  /* overflow: hidden; */
}
/* .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  } */

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  /* .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  } */
  .indicator{
    position: relative;
    bottom: 15px;
    display: flex;
    justify-content: center;
    
  }
  .indicator-item{
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .active{
    background-color: rgba(212,62,46,1.0);
  }
</style>