
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector , useDispatch} from 'react-redux';
import { addProduct } from '../actions';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AddButton = ({productData}) =>{
 const dispatch = useDispatch();
 const cartCount = useSelector(state=>state.myCart);
 const isSelected = (product)=>{
  var isSele = false;
  for(var j = 0 ; j < cartCount.products.length;j++){
      if(cartCount.products[j].id == product.id){
          isSele = true;
      }
  }
  return isSele;
}
const cartQty = ()=>{
  var qty = 0;
  for(var j = 0 ; j < cartCount.products.length;j++){
    qty = qty + cartCount.products[j].cartQty;
  }
  console.log(cartCount.products)
  return qty;
}
    return (
    <div  style={{textAlign:'right'}} >
       {isSelected(productData) ? 
       <CheckCircleOutlineIcon style={{margin:'10px',position:'absolute',fontSize:'40px', right:'0', top:'0',color:'green'}}/>:
         <AddShoppingCartIcon  className='Pointer'
          onClick={()=>{
            productData.cartQty = 1;
            const doDis =  dispatch(addProduct(productData));
         
            document.getElementById("cartCounter").innerText = cartQty() > 0 ?cartQty() : 1 ;

          }}
          style={{marginRight:'4px',fontSize:'30px',color:'green'}}/>
   
         } </div>
  )
}
export default AddButton;
