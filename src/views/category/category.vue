<template>
  <div class="category">
    <h1>{{message1}}</h1>
    <input type="text" v-model="message" @keyup="keyup">
    <div @click=click>1231231231</div>
    <toast></toast>
  </div>
</template>

<script>
import Toast from 'components/common/toast/toast'
export default {
  components:{
    Toast
  },
  data(){
    return {
      message:'',
      message1:'',
      a:null,
    }
  },
  mounted(){
     this.a=this.debounce(this.input,1000)
  },
  methods:{
    keyup(){
        console.log(this.a)
        this.a()
    },
    debounce(func,delay){
      let timer=null
      return function(){
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        func()
      },delay)
      }

    
    },
    input(){
          this.message1=this.message
    },
    click(){
      this.$toast.show('你好啊',1000)
    }
  }
}
</script>
