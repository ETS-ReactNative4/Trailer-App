import React, {Component} from 'react';
import './Home.css';
import ReactLoading from 'react-loading';
import Upcoming from './moviesContent/Upcoming';
import Popular from './moviesContent/Popular';
import TopRated from './moviesContent/TopRated';





const API_KEY="16992ad7c757adb35a95a689efb88fb5";
class Home extends Component{
    state={
        //popular movies state
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
        //top rated movies state
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

        //upcoming movies state
        upcoming1:[],
        upcoming2:[],
        upcoming3:[],
        upcoming4:[],
        upcoming5:[],
        upcoming6:[],
        upcoming7:[],
        upcoming8:[],
        upcoming9:[],
        upcoming10:[],
        upcoming11:[],
        
        loading:true,
       
        
        
      }
      
    
    
      async componentDidMount() {
          //api call for popular movies from page 1 to 10
        const popular1 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const popularmovies0 = await popular1.json() 
        const popular2 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`)
        const popularmovies1 = await popular2.json()
        const popular3 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`)
        const popularmovies2 = await popular3.json()
        const popular4 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`)
        const popularmovies3 = await popular4.json()
        const popular5 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=5`)
        const popularmovies4 = await popular5.json()
        const popular6 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=7`)
        const popularmovies5 = await popular6.json()
        const popular7 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=8`)
        const popularmovies6 = await popular7.json()
        const popular8 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=9`)
        const popularmovies7 = await popular8.json()
        const popular9 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=10`)
        const popularmovies8 = await popular9.json()
        const popular10 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=11`)
        const popularmovies9 = await popular10.json()
        const popular11 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=12`)
        const popularmovies10 = await popular11.json()

        //api call for top rated

        const topRated1 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        const topRatedmovies0 = await topRated1.json() 
        const topRated2 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`)
        const topRatedmovies1 = await topRated2.json()
        const topRated3 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`)
        const topRatedmovies2 = await topRated3.json()
        const topRated4 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=4`)
        const topRatedmovies3 = await topRated4.json()
        const topRated5 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=5`)
        const topRatedmovies4 = await topRated5.json()
        const topRated6 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=7`)
        const topRatedmovies5 = await topRated6.json()
        const topRated7 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=8`)
        const topRatedmovies6 = await topRated7.json()
        const topRated8 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=9`)
        const topRatedmovies7 = await topRated8.json()
        const topRated9 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=10`)
        const topRatedmovies8 = await topRated9.json()
        const topRated10 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=11`)
        const topRatedmovies9 = await topRated10.json()
        const topRated11 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=12`)
        const topRatedmovies10 = await topRated11.json()

         //api call for upcoming movies
         const upcoming1 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
         const upcomingmovies0 = await upcoming1.json() 
         const upcoming2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`)
         const upcomingmovies1 = await upcoming2.json()
         const upcoming3 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`)
         const upcomingmovies2 = await upcoming3.json()
         const upcoming4 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=4`)
         const upcomingmovies3 = await upcoming4.json()
         const upcoming5 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=5`)
         const upcomingmovies4 = await upcoming5.json()
         const upcoming6 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=7`)
         const upcomingmovies5 = await upcoming6.json()
         const upcoming7 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=8`)
         const upcomingmovies6 = await upcoming7.json()
         const upcoming8 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=9`)
         const upcomingmovies7 = await upcoming8.json()
         const upcoming9 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=10`)
         const upcomingmovies8 = await upcoming9.json()
         const upcoming10 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=11`)
         const upcomingmovies9 = await upcoming10.json()
         const upcoming11 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=12`)
         const upcomingmovies10 = await upcoming11.json()

        

        this.setState({
            //setstate fro popular
            popular1:popularmovies0.results,
            popular2:popularmovies1.results,
            popular3:popularmovies2.results,
            popular4:popularmovies3.results,
            popular5:popularmovies4.results,
            popular6:popularmovies5.results,
            popular7:popularmovies6.results,
            popular8:popularmovies7.results,
            popular9:popularmovies8.results,
            popular10:popularmovies9.results,
            popular11:popularmovies10.results,
            //setstate for top rated
            topRated1:topRatedmovies0.results,
            topRated2:topRatedmovies1.results,
            topRated3:topRatedmovies2.results,
            topRated4:topRatedmovies3.results,
            topRated5:topRatedmovies4.results,
            topRated6:topRatedmovies5.results,
            topRated7:topRatedmovies6.results,
            topRated8:topRatedmovies7.results,
            topRated9:topRatedmovies8.results,
            topRated10:topRatedmovies9.results,
            topRatedr11:topRatedmovies10.results,

            //setstate for upcoming movies
            upcoming1:upcomingmovies0.results,
            upcoming2:upcomingmovies1.results,
            upcoming3:upcomingmovies2.results,
            upcoming4:upcomingmovies3.results,
            upcoming5:upcomingmovies4.results,
            upcoming6:upcomingmovies5.results,
            upcoming7:upcomingmovies6.results,
            upcoming8:upcomingmovies7.results,
            upcoming9:upcomingmovies8.results,
            upcoming10:upcomingmovies9.results,
            upcomingr11:upcomingmovies10.results,


        })
        setTimeout(()=>
          this.setState({
            loading:false
          }),3000);
       
    }
  
   

      
    render(){
      
        let data;
      if(this.state.loading){
        data = <div className="loader" style={{textAlign:"center"}}>
          <ReactLoading type={"spinningBubbles"} color="#fff" height={50} width={50} />
          </div>
      }else{
        data=<div>
            <Upcoming
upcoming1={this.state.upcoming1}
upcoming2={this.state.upcoming2}
upcoming3={this.state.upcoming3}
upcoming4={this.state.upcoming4}
upcoming5={this.state.upcoming5}
upcoming6={this.state.upcoming6}
upcoming7={this.state.upcoming7}
upcoming8={this.state.upcoming8}
upcoming9={this.state.upcoming9}
upcoming10={this.state.upcoming10}
upcoming11={this.state.upcoming11}
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