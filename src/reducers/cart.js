const instate = {
    products:[]
}
const addProduct = (state,action)=>{
    var cartMemoryTx = window.localStorage.getItem('cart')? window.localStorage.getItem('cart'):'[]';
    var cartMemoryJs = JSON.parse(cartMemoryTx);
    cartMemoryJs.push(action.product)
    var backst = JSON.stringify(cartMemoryJs);
    window.localStorage.setItem('cart',backst)
  
        return {
            ...state,
            products:[...state.products,action.product]
        }
    
   
}
const getMemory = (state)=>{
    var cartMemoryTx = window.localStorage.getItem('cart')? window.localStorage.getItem('cart'):'[]';
    var cartMemoryJs = JSON.parse(cartMemoryTx);
    if(state.products.length < 1 && cartMemoryJs.length > 0){
        return {
            ...state,
            products:[ ...cartMemoryJs]
        }
    }else{
        return state;
    }
}
const editCart =(state,action)=>{
  for(var p = 0 ; p < state.products.length;p++){
    if(state.products.id == action.product.id){
        state.products[p] = action.product;
    }
  }
  var backst = JSON.stringify(state.products);
  window.localStorage.setItem('cart',backst)
  return {...state};

}
const deleteCart =(state,action)=>{
state.products =state.products.filter(product=>{
     if(product.id !== action.product.id){
      return product ;
     }
     
   }) 
   var backst = JSON.stringify(state.products);
   window.localStorage.setItem('cart',backst)
 
   return {
      ...state
  }
  }
const cartReducer = (state= instate,action)=>{
    state = getMemory(state)
    switch(action.type){
        case 'ADDCART':
            return addProduct(state,action);
        case 'EDITCART':
            return editCart(state,action);
            case 'DELETECART':
                return deleteCart(state,action);
            default:
        return state;
    }
}

export default cartReducer;