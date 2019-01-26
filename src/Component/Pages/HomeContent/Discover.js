import React from 'react';
import './Discover.css';
import Discover from './DiscoverTrailers';
import Ontv from './OnTv';

function HomeDiscover (props){
    let movieDiscovered;
    if(props.discovered){
        movieDiscovered=props.discovered.map(discover=>{
            return <Discover
         discover={discover} 
         key={discover.id}
         id={discover.id}
         />

        })
    }

    let ontvDiscoverd;
    if(props.onTv){
        ontvDiscoverd=props.onTv.map(tv=>{
            return <Ontv
            tv={tv} 
            key={tv.id}
            id={tv.id}
            
            />
        })
    }
    return(
        <div className="content">
        <div className="title">
        <h3>Movies || Discover</h3>
        
       
        </div>
        <div className="discover">
        {movieDiscovered}
        </div>
        <h3>On Tv</h3>
        <div className="ontv">
        {ontvDiscoverd}
        </div>           

        </div>
    )
}

export default HomeDiscover;