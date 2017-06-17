import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileInputFormContainer from './Container/FileInputFormContainer.js';
import ResultsView from './Component/ResultsView.js';
import Navbar from './Component/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {this.props.fileData ? <ResultsView data={this.props.fileData} /> : <FileInputFormContainer />}
        </div>
      </div>
    );
  }
}

export default App;
