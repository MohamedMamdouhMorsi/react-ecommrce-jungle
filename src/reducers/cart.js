
const addCart = (product,state)=>{
    state.products.push(product);
}

const cartReducer = (state={products:[]},action)=>{
    switch(action.type){
        case 'ADDCART':
            return addCart(action.product,state);
        default:
        return state;
    }
}

export default cartReducer;