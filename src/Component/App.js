import React, { Component } from 'react';
import FileInputFormContainer from '../Container/FileInputFormContainer.js';
import ResultsView from './ResultsView.js';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Route path="/" component={FileInputFormContainer} />
            <Route path="/Results" component={ResultsView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
