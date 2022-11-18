import React, { Component } from 'react'
import Products from './Products';
class AppArea extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <div className='container'>
            
            <Products/>
            </div> );
    }
}
 
export default AppArea;