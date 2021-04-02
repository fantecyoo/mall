import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCartList(state,payload){
            for(item in state.cartList){
                if(item.iid===payload.iid){
                    item.count++
                }
                else {
                    item.count=0;
                    state.cartList.push(payload)
                }
            }
        }
    }
})

export default store