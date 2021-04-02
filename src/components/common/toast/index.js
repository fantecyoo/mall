import Toast from './toast.vue'
import { createApp } from 'vue'
const obj={}

obj.install = function(app){
    //1.创建组件构造器
    // const Toastconstructor = Vue.extend(Toast)
    // //2.利用组件构造器，创建出一个组件对象
    // const toast = new Toastconstructor()
    // //3.将组件对象，手动挂载到某一个元素上
    // toast.$mount(document.createElement('div'))
    // //4.将该元素添加到body中，并注册到prototype中
    // document.body.appendChild(toast.$el)
    // Vue.prototype.$toast = toast
    const parent = document.createElement('div')
    const parent2 = document.createElement('div')
    document.body.appendChild(parent)
    document.body.appendChild(parent2)
    console.log(parent)
    console.log(parent2);
    // const instance= Toast.$mount(parent)
    // console.log(instance)
    const toast=createApp(Toast).mount(parent)
    app.config.globalProperties.$toast=toast
}

export default obj