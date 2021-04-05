import React from 'react';
import Nav from './Shared/Nav'
import About from './About'
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Router, Route, Switch } from 'react-router-dom';
import PortfolioDetail from './PortfolioDetail'
import history from './History';
import './App.css';


const App = () => {

  return (
    <div>
      <Router history={history}>
        <Nav />
        <div id="App" className="">
          <Switch>
            <Route path="/" exact component={Home} >
            </Route>
            <Route path="/about" exact component={About}>
            </Route>
            <Route path="/resume" exact component={Resume}>
            </Route>
            <Route path="/portfolio" exact component={Portfolio}>
            </Route>
            <Route path="/portfolio/portfolio1" exact component={PortfolioDetail}>
            </Route>
            <Route path="/portfolio/portfolio2" exact component={PortfolioDetail}>
            </Route>
            <Route path="/portfolio/portfolio3" exact component={PortfolioDetail}>
            </Route>
            <Route path="/contact" exact component={Contact}>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
};


export default App;