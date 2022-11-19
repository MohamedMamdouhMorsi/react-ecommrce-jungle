import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

import Carousel from './Carousel';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = { }
   openScreen = ()=>{
    const screen = document.getElementById("screen");
    this.props.onProductClick(this.props.productData);
    screen.className = "screen active"
 
  }
    render() { 
        return (
            <div className='col' >
            <div className="card" style={{width: '18rem',margin:'auto'}}  >
        <img src={this.props.productData.thumbnail}  onClick={this.openScreen} className="card-img-top Pointer " alt={this.props.productData.brand}/>
        <div className="card-body">
        <b>  {this.props.productData.title}</b>
          <p className="card-text">{this.props.productData.description}</p>
        </div>
      </div> 

  
  </div>);
    }
}
 
export default Product;