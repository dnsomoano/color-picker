import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Choose Your Color</header>
        <img src={"/images/color-box.png"} />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
