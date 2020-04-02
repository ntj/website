import React from 'react';
import Navigation from "./Navigation";
import Coding from "./Coding";
import Bildung from "./Bildung";
import Header from "./Header";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
  } from 'react-router-dom';

function _redirectToHome() {
    return <Redirect to="/" />;
  }

export default function App(){
    
    return (
      <Router>
      <div>
        <Header />
        {/* content */}
        <Switch>
            <Route exact path="/" component={() => <Navigation default={2} />} />
            <Route path="/coding" component={() => <Navigation default={2} />} />
            <Route path="/edu" component={() => <Navigation default={4} />} />
            {/* catch-all redirects to home */}
            <Route render={_redirectToHome} />
        </Switch>
        </div>
    </Router>
    )
  }