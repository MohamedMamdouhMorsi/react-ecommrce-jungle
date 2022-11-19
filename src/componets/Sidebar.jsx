import React, { Component } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ParkTwoToneIcon from '@mui/icons-material/ParkTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


class Sidebar extends Component {
    
    state = {
        activeSidebar:true,
         tags:[
        {
            name:"Home",
            icon: <HomeOutlinedIcon />,
            active:true
        },{
            name:"Dashboard",
            icon:<SpeedOutlinedIcon />
        },{
            name:"Orders",
            icon:<CalendarMonthIcon />
        },{
            name:"Products",
            icon:<GridViewIcon />
        },{
            name:"Customers",
            icon:<AccountCircleRoundedIcon />
        }
    ] } 

    sidebarCls(){
        let cls = "d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideMenu";
        cls += this.state.activeSidebar === true?   '' :' active';

        return cls;
    }

    closeSidebar =()=>{
         this.setState({activeSidebar:this.state.activeSidebar == true ? false : true});
         
    }
    render() { 

        return (
        <div style={{position: 'fixed',
            top: 0,
            margin: 0,
            width: '100%'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div style={{left:0,marginLeft:0}}>
    <button  onClick={this.closeSidebar}  style={{background:'transparent',border:'none',right:0, marginRight:'10px',float:'right',color:"white",fontWeight:"bold",fontSize:"20px"}}>
    <MenuOutlinedIcon style={{color : this.state.activeSidebar === true?   '#ffffff' :'#777777',fontSize:'30px',color:'greenyellow'}}/>
    <ParkTwoToneIcon style={{marginLeft:'4px',marginRight:'4px',fontSize:'30px',color:'greenyellow'}}/>jungle
    </button>
    </div>
<div style={{right:0,marginRight:0}}>
    <button onClick={this.closeSidebar}  style={{background:'transparent',border:'none',right:0, marginRight:'10px',float:'right'}}><ShoppingCartOutlinedIcon style={{color : this.state.activeSidebar === true?   '#ffffff' :'#777777'}}/></button>
    <button onClick={this.closeSidebar}  style={{background:'transparent',border:'none',right:0, marginRight:'10px',float:'right'}}><NotificationsNoneOutlinedIcon style={{color : this.state.activeSidebar === true?   '#ffffff' :'#777777'}}/></button>
    </div>
  </nav>
            <main className="d-flex flex-nowrap">
            <div className={this.sidebarCls()} style={{width: '280px'}}>
            
              <span className="fs-4"><ParkTwoToneIcon/>jungle</span>
            <button onClick={this.closeSidebar} style={{right:0 , marginRight:'10px',    position: 'absolute',background: 'transparent' ,color:'white',border:'none'}}><ArrowBackIcon/></button>
             
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
             {
                this.state.tags.map(tag=>{
                    let cl = tag.active ? "nav-link active " : "nav-link text-white";
                 
                    return (
                            <li id={tag.name} key={tag.name+"key"} className="nav-item ">
                                <a href="#" className={cl} aria-current="page">
                              <span className='m-2'>{tag.icon}</span>  
                                {tag.name}
                                </a>
                            </li>
                    )  }
                    )
                }
            </ul>
            <hr/>
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" >
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
          </main>
          </div>
          )

    }
}
 
export default Sidebar;