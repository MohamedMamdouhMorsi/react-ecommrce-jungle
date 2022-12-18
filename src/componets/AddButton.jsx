
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector , useDispatch} from 'react-redux';
import { addProduct } from '../actions';

const AddButton = ({productData}) =>{
 const dispatch = useDispatch();
 const cartCount = useSelector(state=>state.myCart);


    return (
    <div  style={{textAlign:'right'}} >
          <AddShoppingCartIcon  className='Pointer'
          onClick={()=>{
            const doDis =  dispatch(addProduct(productData));
         
            document.getElementById("cartCounter").innerText = cartCount.products.length + 1;

          }}
          style={{marginRight:'4px',fontSize:'30px',color:'green'}}/>

    </div>
  )
}
export default AddButton;
