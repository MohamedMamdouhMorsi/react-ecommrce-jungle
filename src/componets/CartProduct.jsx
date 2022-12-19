import React from 'react'
import DiscountIcon from '@mui/icons-material/Discount';
import AddIcon from '@mui/icons-material/Add';
import { useSelector , useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { editCart ,deleteCart} from '../actions';
export default function CartProduct({productData}) {
    const dispatch = useDispatch();
    const cartCount = useSelector(state=>state.myCart);
    const cartQty = ()=>{
        var qty = 0;
        for(var j = 0 ; j < cartCount.products.length;j++){
           qty = qty + cartCount.products[j].cartQty;
        }
        return qty;
      }
  return (
    <div className="contCart ">  

      <img src={productData.thumbnail} className="imgCart " alt={productData.brand}/>
        <div className="dataCart ">
        <b>  {productData.title}</b>
        <br/>
               
                <span style={{color:"#888",fontSize:'20px'}}>$ {productData.price} </span>
                <span  style={{color:"#6b79fc",marginLeft:'20px',display:'inline-block'}}>
                    Qty
                    {
                        productData.cartQty > 1?
                    <IndeterminateCheckBoxIcon onClick={()=>{
          productData.cartQty = productData.cartQty - 1;
            const doDis =  dispatch(editCart(productData));
         
            document.getElementById("cartCounter").innerText =   cartQty();

          }}/> : <DeleteIcon  onClick={()=>{
            const doDis =  dispatch(deleteCart(productData));
          }}/>}

{productData.cartQty}
<AddBoxIcon onClick={()=>{
           productData.cartQty = productData.cartQty + 1;
           
            const doDis =  dispatch(editCart(productData));
         
            document.getElementById("cartCounter").innerText =  cartQty();

          }}/>
                </span>
                <br/>
                <DiscountIcon style={{color:"red",fontSize:'small'}}/> 
                <span style={{color:"red",fontSize:'small'}}> {productData.discountPercentage} %</span>
               {productData.cartQty > 1? <span  style={{marginLeft:'20px',display:'inline-block'}}>
                total ${productData.cartQty * productData.price}
                </span>: ''}
    
        </div>
  
    </div>
  )
}
