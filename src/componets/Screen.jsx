import React, { Component } from 'react'
import Carousel from './Carousel';
class Screen extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    closeScreen = ()=>{
        document.getElementById("screen").className = "screen";
    }
    screenBody = ()=>{
        if(this.props.screenType == 'productCarousel'){
            let v = 0;
            return (
                <Carousel product={this.props.screenProduct} active={v}/>
            )
        }
        return '';
    }
    render() { 
      
        return (
        
            <div className='screen' id='screen'>
                <div className='screenBackground Pointer' onClick={this.closeScreen}>
                </div>
                <div className='screenBody' id='screenBody'>
              {this.screenBody()} 
                </div>
           
                </div>  );
    }
}
 
export default Screen;