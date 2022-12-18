import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import { useSelector , useDispatch} from 'react-redux';
import Carousel from './Carousel';
import AddButton from './AddButton';
import DiscountIcon from '@mui/icons-material/Discount';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = { }
   openScreen = ()=>{
    const screen = document.getElementById("productScreen");
    this.props.onProductClick(this.props.productData);
    screen.className = "screen active"
 
  }
  isLogged =()=>{
    return useSelector(data=>{return data.isLogged});

  }
    render() { 
        return (
            <div className='col' >
            <div className="card" style={{width: '18rem',margin:'auto'}}  >
        <img src={this.props.productData.thumbnail}  onClick={this.openScreen} className="card-img-top Pointer " alt={this.props.productData.brand}/>
        <div className="card-body">
        <b>  {this.props.productData.title}</b>
          <p className="card-text">{this.props.productData.description}</p>
          <span style={{color:"#888",fontSize:'20px'}}>$ {this.props.productData.price} </span>
          <br></br>
          <DiscountIcon style={{color:"red",fontSize:'small'}}/> 
          <span style={{color:"red",fontSize:'small'}}> {this.props.productData.discountPercentage} %</span>
       <AddButton productData={this.props.productData} key={this.props.productData.id}/>
        </div>
      </div> 

  
  </div>);
    }
}
 
export default Product;