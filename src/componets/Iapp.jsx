import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Screen from './Screen'
import Products from './Products';
import CartView from './CartView'
import {BrowserRouter as Router ,Switch,Routes, Route} from 'react-router-dom';
class Iapp extends Component {
   
    state = { screenProduct:{} ,start:true}

    onProductClick =  (product)=>{
        this.setState({screenProduct:product});
    }
    onStartScreen =()=>{
        this.setState({start:false});
    }
    render() { 
        return ( <div >
            <Router>
               <Routes>
               <Route path='/' element={<Products onProductClick={this.onProductClick}/>} />
               <Route path='/products' element={<Products onProductClick={this.onProductClick}/>} />
               <Route path='/cart' element={<CartView  onProductClick={this.onProductClick}/>} />
               </Routes>
               
                
           
            
            <Sidebar />
            <Screen screenType='productCarousel' key='productScreen' id='productScreen' screenProduct={this.state.screenProduct}/>
            </Router>
            </div> );
    }
}
 
export default Iapp;