<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key=index class="item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{}
    }
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    border-bottom: 8px solid #eee;
    padding-bottom: 10px;
}
.recommend .item{
    flex:1;
    flex-shrink: 1;
    margin: 5px;
}
.recommend img{
    width: 100%;
    margin-bottom: 5px;
}
</style>