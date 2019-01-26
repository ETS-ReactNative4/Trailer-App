import React, {Component} from 'react';
import './Home.css';
import ReactLoading from 'react-loading';
import Discover from './HomeContent/Discover';
import ModalVideo from 'react-modal-video';



const API_KEY="16992ad7c757adb35a95a689efb88fb5";
class Home extends Component{
    state={
        discovered:[],
        onTv:[],
        loading:true,
        isOpen:false,
        
      }
      
    
    
      async componentDidMount() {
        const discovered = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        const movies = await discovered.json() 
        const onTv = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`)
        const tv = await onTv.json()
        console.log(movies);
        console.log(tv);
        this.setState({
            discovered:movies.results,
            onTv:tv.results
        })
        setTimeout(()=>
          this.setState({
            loading:false
          }),3000);
       
    }
    openModal=()=>{
        this.setState({isOpen:true});
    }


      
    render(){
      
        let data;
      if(this.state.loading){
        data = <div className="loader" style={{textAlign:"center"}}>
          <ReactLoading type={"spinningBubbles"} color="#fff" height={50} width={50} />
          </div>
      }else{
        data=<div>
<Discover 
discovered={this.state.discovered}
onTv={this.state.onTv}
/>

        </div>
      }
    

        return(
            <div className='home'>
            <div className="header-one">
            <div className="narcos">
            <img src="https://www.returndates.com/backgrounds/narcos.logo.png"  alt="narcos"/>
            <div className="about">
            {this.props.title}
            <p>{this.props.description}</p>
            </div>
            <div className="a-group">
            
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='VBLcYJ7C4F0' onClose={() => this.setState({isOpen: false})} style={{position:"sticky"}} />
            
          <button onClick={this.openModal}>{this.props.trailer}</button>
          </div>
             </div>
             </div>
             <div className="content">
      
      {data}
      
      </div>
            </div>
        )
    }
};

Home.defaultProps = {
    title: 'Seasons Coming Soon!',
    trailer:'Watch Trailer',
    description: 
    'Narcos is an American crime drama web television series. ',
  }

export default Home;