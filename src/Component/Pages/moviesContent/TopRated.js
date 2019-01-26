import React from 'react';
import './Popular.css';
import TopRated from '../HomeContent/DiscoverTrailers';



function TopRatedMovies (props){
    let topRated1;
    if(props.topRated1){
        topRated1=props.topRated1.map(discover=>{
            return <TopRated
         discover={discover} 
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated2;
    if(props.topRated2){
        topRated2=props.topRated2.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated3;
    if(props.topRated3){
        topRated3=props.topRated3.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated4;
    if(props.topRated4){
        topRated3=props.topRated4.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated5;
    if(props.topRated5){
        topRated5=props.topRated5.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated6;
    if(props.topRated6){
        topRated6=props.topRated5.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated7;
    if(props.topRated7){
        topRated7=props.topRated7.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated8;
    if(props.topRated8){
        topRated8=props.topRated8.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated9;
    if(props.topRated9){
        topRated9=props.topRated9.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated10;
    if(props.topRated10){
        topRated10=props.topRated10.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let topRated11;
    if(props.topRated11){
        topRated11=props.topRated11.map(discover=>{
            return <TopRated
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }



   
    return(
        <div className="content">
        <div className="title">
        <h3>TopRated</h3>
        
     
  
        
       
        </div>
        <div className="popular">
        {topRated1}
        {topRated2}
        {topRated3}
        {topRated4}
        {topRated5}
        {topRated6}
        {topRated7}
        {topRated8}
        {topRated9}
        {topRated10}
        {topRated11}
        
        
        </div>           

        </div>
    )
}

export default TopRatedMovies;