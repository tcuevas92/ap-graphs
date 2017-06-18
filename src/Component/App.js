import React, { Component } from 'react';
import FileInputFormContainer from '../Container/FileInputFormContainer.js';
import ResultsView from './ResultsView.js';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.fileData ? <ResultsView /> : <FileInputFormContainer />}
        </div>
      </div>
    );
  }
}

export default App;
