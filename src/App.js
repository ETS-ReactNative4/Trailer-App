import React, {Component} from 'react'
import './App.css';
import Navigation from './Component/Navigation/Navigations';
import SiderDrawer from './Component/Navigation/SideDrawer/SideDrawer';
import Backdrop from './Component/Navigation/Backdrop/Backdrop'
import Routes from './Component/Routes';
class App extends Component{
  state={
    SideDrawerOpen:false
  }

  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };
  backdropClickHandler=()=>{
    this.setState({SideDrawerOpen:false});
  }
  

  render(){
    let sideDrawer;
    let backdrop;
    if(this.state.SideDrawerOpen){
      sideDrawer=<SiderDrawer />
      backdrop=<Backdrop click={this.backdropClickHandler} />
    }

    return(
      <div style={{height:"100%"}}>
      <div >
     <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
     {sideDrawer}
     {backdrop}
     

     <Routes />
     
     </div>
    
      </div>
        
    );
  }
}
export default App;