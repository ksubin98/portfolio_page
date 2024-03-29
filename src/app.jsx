import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './app.css';
import About from './components/page/about';
import Contact from './components/page/contact';
import Main from './components/page/main';
import Project from './components/page/project';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={['/', 'home']}>
            <Main />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
