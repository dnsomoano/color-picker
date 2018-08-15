import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 0.0,
      saturation: 0.0,
      lightness: 0.0
    };
  }

  slideBar = () => {
    console.log(this);
    this.setState({
      hue: 0.0,
      saturation: 0.0,
      lightness: 0.0
    });
  };
  render() {
    return (
      <div>
        <section>
          <fieldset>
            <legend>Color</legend>
            <label for="hue">Hue</label>
            <input type="range" id="hue" name="hue" min="0" max="100" />
            <label for="saturation">Saturation</label>
            <input
              type="range"
              id="saturation"
              name="saturation"
              min="0"
              max="100"
              step="2"
            />
            <label for="lightness">Lightness</label>
            <input
              type="range"
              id="lightness"
              name="lightness"
              min="0"
              max="100"
              step="3"
            />
          </fieldset>
        </section>
      </div>
    );
  }
}

export default ColorPicker;
