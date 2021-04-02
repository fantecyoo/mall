<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in content" :key=index class="item" :class='{active:currentindex==index}' @click="click(index)" >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        content:{
            type:Array
        }
    },
    data(){
        return {
            currentindex:0
        }
    },
    methods:{
        click(index){
            this.currentindex=index
            this.$emit('goodsclick',index)
        }
    }

}
</script>

<style>
.tabcontrol{
    display: flex;
    text-align: center;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    width:100%;
    /* z-index: 5; */
}
.tabcontrol .item{
    flex:1;
}
.tabcontrol .active{
    color:var(--color-high-text)
}
.tabcontrol .active span{
    padding-bottom: 5px;
    border-bottom: 2px solid var(--color-high-text);
}
</style>