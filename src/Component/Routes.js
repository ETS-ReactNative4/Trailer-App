import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';



const Routes =()=>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movies" component={Movies}/>
        <Route  path="/tvshows" component={TvShows}/>
        

    </Switch>
)
export default Routes;