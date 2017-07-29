import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FileInputFormContainer from '../Container/FileInputFormContainer.js';
import ResultsView from './ResultsView.js';
import Navbar from './Navbar.js';
import NotFound from './NotFound.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/Results" component={ResultsView} />
              <Route exact path="/" component={FileInputFormContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
