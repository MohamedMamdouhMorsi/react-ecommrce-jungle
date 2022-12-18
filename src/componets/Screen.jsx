import React, { Component } from 'react'
import Carousel from './Carousel';
class Screen extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    closeScreen = ()=>{
        if(document.getElementById(this.props.id)){
            document.getElementById(this.props.id).className = "screen";
        } 
    }
    screenBody = ()=>{
        if(this.props.screenType == 'productCarousel'){
            let v = 0;
            return (
                <Carousel product={this.props.screenProduct} active={v}/>
            )
        }else if(this.props.screenType == 'start'){
            return(
            <div style={{width:'100%',backgroundColor:'#fff',height:'50vh'}}>
                <h1>
                    Welcome To Jungle 
                </h1>
                <p>Start Your Journy Now </p>
                <button onClick={this.props.onStartScreen()}>Start</button>
            </div>
            )
        }
        return '';
    }
    render() { 
      
        return (
        
            <div className={this.props.screenType == 'start'?'screen active' : 'screen'} id={this.props.id} >
                <div className='screenBackground Pointer' onClick={this.closeScreen}>
                </div>
                <div className='screenBody' id='screenBody'>
              {this.screenBody()} 
                </div>
           
                </div>  );
    }
}
 
export default Screen;