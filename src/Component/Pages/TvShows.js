import React, {Component} from 'react';
import './Home.css';
import ReactLoading from 'react-loading';
import Airing from './tvContent/Airing';
import Popular from './tvContent/Popular';
import TopRated from './tvContent/TopRated';




const API_KEY="16992ad7c757adb35a95a689efb88fb5";
class Home extends Component{
    state={
        //popular tv shows state
        popular1:[],
        popular2:[],
        popular3:[],
        popular4:[],
        popular5:[],
        popular6:[],
        popular7:[],
        popular8:[],
        popular9:[],
        popular10:[],
        popular11:[],
        //tv top rated state
        topRated1:[],
        topRated2:[],
        topRated3:[],
        topRated4:[],
        topRated5:[],
        topRated6:[],
        topRated7:[],
        topRated8:[],
        topRated9:[],
        topRated10:[],

        //airing today tvshows state
        airing1:[],
        airing2:[],
        airing3:[],
        airing4:[],
        airing5:[],
        airing6:[],
        airing7:[],
        airing8:[],
        airing9:[],
        airing10:[],
        airing11:[],
        
        loading:true,
        isOpen:false,
        
        
      }
      
    
    
      async componentDidMount() {
          //api call for popular tv shows from page 1 to 11
        const popular1 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const populartvshows0 = await popular1.json() 
        const popular2 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=2`)
        const populartvshows1 = await popular2.json()
        const popular3 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=3`)
        const populartvshows2 = await popular3.json()
        const popular4 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=4`)
        const populartvshows3 = await popular4.json()
        const popular5 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=5`)
        const populartvshows4 = await popular5.json()
        const popular6 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=7`)
        const populartvshows5 = await popular6.json()
        const popular7 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=8`)
        const populartvshows6 = await popular7.json()
        const popular8 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=9`)
        const populartvshows7 = await popular8.json()
        const popular9 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=10`)
        const populartvshows8 = await popular9.json()
        const popular10 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=11`)
        const populartvshows9 = await popular10.json()
        const popular11 = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=12`)
        const populartvshows10 = await popular11.json()

        //api call for top rated

        const topRated1 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        const topRatedtvshows0 = await topRated1.json() 
        const topRated2 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=2`)
        const topRatedtvshows1 = await topRated2.json()
        const topRated3 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=3`)
        const topRatedtvshows2 = await topRated3.json()
        const topRated4 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=4`)
        const topRatedtvshows3 = await topRated4.json()
        const topRated5 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=5`)
        const topRatedtvshows4 = await topRated5.json()
        const topRated6 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=7`)
        const topRatedtvshows5 = await topRated6.json()
        const topRated7 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=8`)
        const topRatedtvshows6 = await topRated7.json()
        const topRated8 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=9`)
        const topRatedtvshows7 = await topRated8.json()
        const topRated9 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=10`)
        const topRatedtvshows8 = await topRated9.json()
        const topRated10 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=11`)
        const topRatedtvshows9 = await topRated10.json()
        const topRated11 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=12`)
        const topRatedtvshows10 = await topRated11.json()

         //api call for airing tvshows
         const airing1 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`)
         const airingtvshows0 = await airing1.json() 
         const airing2 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=2`)
         const airingtvshows1 = await airing2.json()
         const airing3 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=3`)
         const airingtvshows2 = await airing3.json()
         const airing4 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=4`)
         const airingtvshows3 = await airing4.json()
         const airing5 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=5`)
         const airingtvshows4 = await airing5.json()
         const airing6 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=7`)
         const airingtvshows5 = await airing6.json()
         const airing7 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=8`)
         const airingtvshows6 = await airing7.json()
         const airing8 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=9`)
         const airingtvshows7 = await airing8.json()
         const airing9 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=10`)
         const airingtvshows8 = await airing9.json()
         const airing10 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=11`)
         const airingtvshows9 = await airing10.json()
         const airing11 = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=12`)
         const airingtvshows10 = await airing11.json()

        

        this.setState({
            //setstate fro popular
            popular1:populartvshows0.results,
            popular2:populartvshows1.results,
            popular3:populartvshows2.results,
            popular4:populartvshows3.results,
            popular5:populartvshows4.results,
            popular6:populartvshows5.results,
            popular7:populartvshows6.results,
            popular8:populartvshows7.results,
            popular9:populartvshows8.results,
            popular10:populartvshows9.results,
            popular11:populartvshows10.results,
            //setstate for top rated
            topRated1:topRatedtvshows0.results,
            topRated2:topRatedtvshows1.results,
            topRated3:topRatedtvshows2.results,
            topRated4:topRatedtvshows3.results,
            topRated5:topRatedtvshows4.results,
            topRated6:topRatedtvshows5.results,
            topRated7:topRatedtvshows6.results,
            topRated8:topRatedtvshows7.results,
            topRated9:topRatedtvshows8.results,
            topRated10:topRatedtvshows9.results,
            topRatedr11:topRatedtvshows10.results,

            //setstate for airing tvshows
            airing1:airingtvshows0.results,
            airing2:airingtvshows1.results,
            airing3:airingtvshows2.results,
            airing4:airingtvshows3.results,
            airing5:airingtvshows4.results,
            airing6:airingtvshows5.results,
            airing7:airingtvshows6.results,
            airing8:airingtvshows7.results,
            airing9:airingtvshows8.results,
            airing10:airingtvshows9.results,
            airingr11:airingtvshows10.results,


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
            <Airing
airing1={this.state.airing1}
airing2={this.state.airing2}
airing3={this.state.airing3}
airing4={this.state.airing4}
airing5={this.state.airing5}
airing6={this.state.airing6}
airing7={this.state.airing7}
airing8={this.state.airing8}
airing9={this.state.airing9}
airing10={this.state.airing10}
airing11={this.state.airing11}
/>


<Popular 
popular1={this.state.popular1}
popular2={this.state.popular2}
popular3={this.state.popular3}
popular4={this.state.popular4}
popular5={this.state.popular5}
popular6={this.state.popular6}
popular7={this.state.popular7}
popular8={this.state.popular8}
popular9={this.state.popular9}
popular10={this.state.popular10}
popular11={this.state.popular11}
/>
<TopRated
topRated1={this.state.topRated1}
topRated2={this.state.topRated2}
topRated3={this.state.topRated3}
topRated4={this.state.topRated4}
topRated5={this.state.topRated5}
topRated6={this.state.topRated6}
topRated7={this.state.topRated7}
topRated8={this.state.topRated8}
topRated9={this.state.topRated9}
topRated10={this.state.topRated10}
topRated11={this.state.topRated11}
/>

        </div>
      }
    

        return(
            <div className='home'>
            
            
             <div className="content">
      
      {data}
      
      </div>
            </div>
        )
    }
};



export default Home;