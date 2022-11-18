import React, { Component } from 'react'
class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='col'>
            <div className="card" style={{width: '18rem',margin:'auto'}}  >
        <img src={this.props.productData.thumbnail} className="card-img-top" alt={this.props.productData.brand}/>
        <div className="card-body">
        <b>  {this.props.productData.title}</b>

          <p className="card-text">{this.props.productData.description}</p>
        </div>
      </div> 
      </div>);
    }
}
 
export default Product;