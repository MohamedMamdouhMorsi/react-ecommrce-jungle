import React, { Component } from 'react'
class Carousel extends Component {
  constructor(props) {
    super(props);
  
  }
  state = { active:this.props.active }

  next = ()=>{
    if(this.props.product &&  this.props.product.images&&  this.props.product.images.length > 0){

      var n = this.state.active < this.props.product.images.length -1 ?  this.state.active +1 : 0;
      console.log(n)
      this.setState({active:n});
    }
  }
  back = ()=>{
    if(this.props.product &&  this.props.product.images&&  this.props.product.images.length > 0){

      var n = this.state.active >0 ?  this.state.active -1 : this.props.product.images.length -1;
      console.log(n)
      this.setState({active:n});
    }
  }
  render() { 
    let cp = 0;
   
    return (
  <div style={{width:'100%',maxWidth:'750px',margin:'auto'}}> { 
    this.props.product &&  this.props.product.images&&  this.props.product.images.length > 1? 
    
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
    {
       this.props.product.images.map(src=>{
          
       let cls = cp === this.state.active ? "carousel-item active" :"carousel-item ";
       cp++;
          return (
                  <div key={ this.props.product.id+"_carousel_"+cp} className={cls}>
                  <img src={src} className="d-block w-100" alt="..."/>
                </div>
          )  }
          )
      }
  
   
    </div>
    <button className="carousel-control-prev" onClick={this.back} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" onClick={this.next} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  :   this.props.product &&  this.props.product.images&&  this.props.product.images.length === 1? 
  <div key={ this.props.product.id+"_carousel_"} className="carousel-item active" >
  
  <img src={this.props.product.images} className="d-block w-100" alt="..."/>
  </div>
  
  : '' }</div> );
  }
}
 
export default Carousel;