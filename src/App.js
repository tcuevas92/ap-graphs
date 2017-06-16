import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileInputFormContainer from './Container/FileInputFormContainer.js';
import DataTable from './Component/DataTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {this.props.selectedFile ? <DataTable data={this.props.selectedFile} /> : <FileInputFormContainer />}
      </div>
    );
  }
}

export default App;
