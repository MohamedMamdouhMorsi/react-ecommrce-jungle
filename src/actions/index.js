export const addProduct =(product)=>{
    return {
        type:'ADDCART',
        product:product
    }
}
export const editCart =(product)=>{
    return {
        type:'EDITCART',
        product:product
    }
}
export const deleteCart =(product)=>{
    return {
        type:'DELETECART',
        product:product
    }
}