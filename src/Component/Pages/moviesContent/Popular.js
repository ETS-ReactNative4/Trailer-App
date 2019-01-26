import React from 'react';
import './Popular.css';
import Popular from '../HomeContent/DiscoverTrailers';



function PopularMovies (props){
    let popular1;
    if(props.popular1){
        popular1=props.popular1.map(discover=>{
            return <Popular
         discover={discover} 
         key={discover.id}
         id={discover.id}
        
         
         />

        })
    }
    let popular2;
    if(props.popular2){
        popular2=props.popular2.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
         
         
         />

        })
    }
    let popular3;
    if(props.popular3){
        popular3=props.popular3.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         
         />

        })
    }
    let popular4;
    if(props.popular4){
        popular3=props.popular4.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         
         />

        })
    }
    let popular5;
    if(props.popular5){
        popular5=props.popular5.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         
         />

        })
    }
    let popular6;
    if(props.popular6){
        popular6=props.popular6.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         
         />

        })
    }
    let popular7;
    if(props.popular7){
        popular7=props.popular7.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         />

        })
    }
    let popular8;
    if(props.popular8){
        popular8=props.popular8.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         
         />

        })
    }
    let popular9;
    if(props.popular9){
        popular9=props.popular9.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
         
         />

        })
    }
    let popular10;
    if(props.popular10){
        popular10=props.popular10.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         />

        })
    }
    let popular11;
    if(props.popular11){
        popular11=props.popular11.map(discover=>{
            return <Popular
         discover={discover}
         key={discover.id}
         id={discover.id}
        
         
         />

        })
    }



   
    return(
        <div className="content">
        <div className="title">
        <h3>Popular</h3>
      
     
  
        
       
        </div>
        <div className="popular">
        {popular1}
        {popular2}
        {popular3}
        {popular4}
        {popular5}
        {popular6}
        {popular7}
        {popular8}
        {popular9}
        {popular10}
        {popular11}
        
        
        </div>           

        </div>
    )
}

export default PopularMovies;