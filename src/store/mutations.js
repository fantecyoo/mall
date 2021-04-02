export default {
    addCartList(state,payload){

        let haveitem=0
        for(let item of state.cartList){
            if(item.iid===payload.iid){
                item.count++
                haveitem=1
            }
            else haveitem=0
        }
  
        if(haveitem==0) {
          payload.count=1
          payload.selected=true
          state.cartList.push(payload)
        
        }
    }
  
}