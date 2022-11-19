import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Screen from './Screen'
import Products from './Products';

class Iapp extends Component {
    constructor(props) {
        super(props);
    }
    state = { screenType:'productCarousel',screenProduct:{} }

    onProductClick =  (product)=>{
        this.setState({screenProduct:product});
        this.setState({screenType:'productCarousel'});

    }
    render() { 
        return ( <div >
            
            <Products onProductClick={this.onProductClick}/>
            <Sidebar />
            <Screen screenType={this.state.screenType}  screenProduct={this.state.screenProduct}/>
            </div> );
    }
}
 
export default Iapp;