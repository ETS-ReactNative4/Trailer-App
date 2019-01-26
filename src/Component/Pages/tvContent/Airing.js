import React from 'react';
import './Airing.css'
import '../HomeContent/DiscoverTrailers.css';
import Airing from '../HomeContent/OnTv';



function AiringMovies (props){
    let airing1;
    if(props.airing1){
        airing1=props.airing1.map(tv=>{
            return <Airing
         tv={tv} 
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing2;
    if(props.airing2){
        airing2=props.airing2.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing3;
    if(props.airing3){
        airing3=props.airing3.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing4;
    if(props.airing4){
        airing3=props.airing4.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing5;
    if(props.airing5){
        airing5=props.airing5.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing6;
    if(props.airing6){
        airing6=props.airing5.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing7;
    if(props.airing7){
        airing6=props.airing7.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing8;
    if(props.airing8){
        airing6=props.airing8.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing9;
    if(props.airing9){
        airing6=props.airing9.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }
    let airing10;
    if(props.airing10){
        airing6=props.airing10.map(tv=>{
            return <Airing
         tv={tv}
         key={tv.id}
         id={tv.id}
         />

        })
    }


   
    return(
        <div className="content">
        <div className="title">
        <h3>Airing Today</h3>
        
     
  
        
       
        </div>
        <div className="popular">
        {airing1}
        {airing2}
        {airing3}
        {airing4}
        {airing5}
        {airing6}
        {airing7}
        {airing8}
        {airing9}
        {airing10}
        
        
        </div>           

        </div>
    )
}

export default AiringMovies;