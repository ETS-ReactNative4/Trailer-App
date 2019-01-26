import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Popular from './moviesContent/Popular';
import TopRated from './moviesContent/TopRated';
const Routes =()=>(
    <Switch>
        <Route exact path="/" component={Popular}/>
        <Route path="/movies/top-rated" component={TopRated}/>
        {/* <Route  path="/tvseries" component={TvSeries}/>
        <Route  path="/collections" component={Collections}/>
        <Route  path="/trending" component={Trending}/> */}

    </Switch>
)
export default Routes;