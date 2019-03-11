import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import Home from '../Home/Home.jsx';
import Example from '../Example/Example.jsx';
import Pokemon from '../Pokemon/Pokemon.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import Detail from '../Detail/Detail.jsx';

class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL +"/"} component={Home}/>
              {/*<Route exact path="/example" component={Example}/>*/}
              {/*<Route exact path="/pokemon" component={Pokemon}/>*/}
              <Route exact path={process.env.PUBLIC_URL+"/gallery"} component={Gallery}/>
              <Route path={process.env.PUBLIC_URL+"/detail/:index"} component={Detail}/>
            </Switch>
      </Router>
    );
  }
}

export default App;
