<template>
  <div class="toast" v-show="index">
      <span>{{message}}</span>  
  </div>
</template>

<script>
export default {
methods:{
    show(message,delay){
        this.message=message;
        this.index=true
        setTimeout(()=>{
            this.index=false
        },delay)
        console.log(this.message)
        console.log(this.index)
    },
    click(){
        console.log('click')
    }
},
 data(){
        return {
            message:'',
            index:false,
        }
    }
}
</script>

<style scoped>
.toast{
    position: relative;
    display: flex;
    background-color:rgba(128 , 128, 128, 0.5);
    width: 120px;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 100;
}
</style>