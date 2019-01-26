import React from 'react';
import './Upcoming.css';
import './Popular.css';
import Upcoming from '../HomeContent/DiscoverTrailers';



function UpcomingMovies (props){
    let upcoming1;
    if(props.topRated1){
        upcoming1=props.upcoming1.map(discover=>{
            return <Upcoming
         discover={discover} 
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming2;
    if(props.upcoming2){
        upcoming2=props.upcoming2.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming3;
    if(props.upcoming3){
        upcoming3=props.upcoming3.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming4;
    if(props.upcoming4){
        upcoming3=props.upcoming4.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming5;
    if(props.upcoming5){
        upcoming5=props.upcoming5.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming6;
    if(props.upcoming6){
        upcoming6=props.upcoming5.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming7;
    if(props.upcoming7){
        upcoming7=props.upcoming7.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming8;
    if(props.upcoming8){
        upcoming8=props.upcoming8.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming9;
    if(props.upcoming9){
        upcoming9=props.upcoming9.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming10;
    if(props.upcoming10){
        upcoming10=props.upcoming10.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }
    let upcoming11;
    if(props.upcoming11){
        upcoming11=props.upcoming11.map(discover=>{
            return <Upcoming
         discover={discover}
         key={discover.id}
         id={discover.id}
         />

        })
    }


   
    return(
        <div className="content">
        <div className="title">
        <h3>Upcoming</h3>
        
     
  
        
       
        </div>
        <div className="popular">
        {upcoming1}
        {upcoming2}
        {upcoming3}
        {upcoming4}
        {upcoming5}
        {upcoming6}
        {upcoming7}
        {upcoming8}
        {upcoming9}
        {upcoming10}
        {upcoming11}
        
        
        </div>           

        </div>
    )
}

export default UpcomingMovies;