import React from 'react'
import Product from './Product';
import { useSelector , useDispatch} from 'react-redux';

export default function CartView({onProductClick}) {
    const cart = useSelector(state=>state.myCart);
  return (
    <div style={{top:0,marginTop:'70px'}}>{

        cart.products.map(product=>{
            return(
               <Product key={product.id} productData={product} onProductClick={onProductClick}/>
            )
        })
        }</div>
  )
}
