import React from 'react'
import CartProduct from './CartProduct';
import { useSelector , useDispatch} from 'react-redux';

export default function CartView() {
    const cart = useSelector(state=>state.myCart);
    const subtotal = ()=>{
      var sub = 0;
      for(var c = 0;c < cart.products.length;c++){
        var newSub = cart.products[c].cartQty *cart.products[c].price; 
      sub = sub + newSub;
      }
    return sub;
    }
  return (
    <div style={{top:0,marginTop:'70px'}} className='container'>
    <h1>
    Shopping Cart
    </h1>
    <hr />
    <b>Subtotal ${subtotal()}</b>
    <hr />
    <div className='row ' style={{position:'relative'}}>
    {

cart.products.length? cart.products.map(product=>{
          const gob = `gob_${product.id}`;
            return(
            
               <CartProduct key={gob} productData={product} />
          
            )
        }):<div>

          <h1 style={{color:'red'}}>
            Your Dont Have Any Items In Your Cart Yet !!!
          </h1>
        </div>
        }    </div>
        </div>
  )
}
