<template>
  <div class="button">
      <input type="button" v-model="value" class="click" @click="onclick" :class="{active:selectall}">
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:'',
      
    }
  },
  methods:{
    onclick(){
      this.$emit('select')
    }
  },
  props:{
    index:'',
    selectall:null,
  }

}
</script>

<style scoped>
.button{
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.click{
  height: 20px;
  width: 20px;
  border-radius: 50%;
  outline: none;
  border: none;
}
.active{
  background-color: var(--color-high-text);
}
</style>