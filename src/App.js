import React, { Component } from "react";
import ColorPicker from "./ColorPicker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Choose Your Color</header>
        <section className="dom">SEE?</section>
        <ColorPicker />
      </div>
    );
  }
}

export default App;
