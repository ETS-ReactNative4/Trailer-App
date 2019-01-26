import React, {Component} from 'react';
import './DiscoverTrailers.css';
import ModalVideo from 'react-modal-video';


const api_key = "16992ad7c757adb35a95a689efb88fb5";

class TrailerList extends Component{
    state={
        Rate:false,
        Trailer:[],
        isOPen:false,
    }
    handleRate=()=>{
        this.setState({Rate:true})

    }
    openModal=()=>{
        this.setState({isOpen:true});
    }

    async componentDidMount(){
        const movieId=this.props.id;
        
        const api_call = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`);
        const trailer = await api_call.json();
        console.log(trailer);
        this.setState({
            Trailer:trailer.results[0].key
        })
    }


    render(){
        let data
        if (this.state.Rate){
           
               data= <div className="vote fa fa-heart" style={{color: 'red', animation:"ease-in-out"}}></div>
           
        }else{
            data=
            <div className="vote fa fa-heart" onClick={this.handleRate}></div>
        }
        let watch;
        if (this.state.isOPen){
            watch=
            <button onClick={this.openModal} style={{visibility:"hidden"}}>{this.props.title}</button>
            
        }else{
            watch=
            <button onClick={this.openModal} style={{textAlign:"center"}}>{this.props.title}</button>
            

        }
          
    const style={
        backgroundImage:`url('https://image.tmdb.org/t/p/original${this.props.discover.poster_path}')`
        
         };
         const search = this.props.title;

         
    return(
        
        <div className="browse-movies">
                   
            <div className="movie-picture" style={style}>
            <div className="picture-item">
            {data}
            <div className="text">{"  "+ this.props.discover.vote_average}</div>
           
            </div>
            <div className="watch">
           
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.Trailer} onClose={() => this.setState({isOpen: false})} />
            
            {watch}
            </div>
            </div>
            
            <div className="movie-details">{this.props.discover.title}</div>
            <div className="date">{"  "+ this.props.discover.release_date}</div>
     
           
            
        </div>
    )
    }
}
TrailerList.defaultProps = {
    title: 'watch'
  }

export default TrailerList;