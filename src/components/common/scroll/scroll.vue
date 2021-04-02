<template>
  <div class="wrapper" ref='wrapper'>
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            scroll:null
        }
    },
      mounted(){
        
         this.scroll = new BScroll(this.$refs.wrapper,{ probeType:3, click:true, mouseWheel:true, observeDOM:true, pullUpLoad:true})

          this.scroll.on('scroll',(position)=>{
            if(this.$route.path==='/home'){
            this.$emit('scroll',position)
            }
            if(this.$route.name==='Detail'){this.$emit('detailscroll',position)}

          })

          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingup')
          })
          
         
      }

}
</script>

<style>

</style>