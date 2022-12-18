const instate = {
    products:[]
}
const addProduct = (state,action)=>{
    var cartMemoryTx = window.localStorage.getItem('cart')? window.localStorage.getItem('cart'):'[]';
    var cartMemoryJs = JSON.parse(cartMemoryTx);
    cartMemoryJs.push(action.product)
    var backst = JSON.stringify(cartMemoryJs);
    window.localStorage.setItem('cart',backst)
    if(state.products.length > 0){
        return {
            ...state,
            products:[...state.products, action.product]
        }
    }else{
        return {
            ...state,
            products:[ action.product]
        }
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
const cartReducer = (state= instate,action)=>{
    state = getMemory(state)
    switch(action.type){
        case 'ADDCART':
            return addProduct(state,action);
        default:
        return state;
    }
}

export default cartReducer;