import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 0,
      saturation: 0,
      lightness: 0
    };
  }

  slideHue = event => {
    const raiseHue = event.target.value;
    this.setState({
      hue: raiseHue
    });
    console.log(this.state.hue);
  };

  slideSaturation = event => {
    const raiseSaturation = event.target.value;
    this.setState({
      saturation: raiseSaturation
    });
    console.log(this.state.saturation);
  };

  slideSaturation = event => {
    const raiseLightness = event.target.value;
    this.setState({
      lightness: raiseLightness
    });
    console.log(this.state.lightness);
  };

  render() {
    return (
      <div>
        <section>
          <fieldset>
            <label for="hue">Hue</label>
            <input placeholder={this.state.hue} />
            <input
              type="range"
              id="hue"
              name="hue"
              min="1"
              max="360"
              onInput={this.slideHue}
              value={this.state.hue}
            />
            <label for="saturation">Saturation</label>
            <input placeholder={this.state.saturation} />
            <input
              type="range"
              id="saturation"
              name="saturation"
              min="1"
              max="100"
              onInput={this.slideSaturation}
              value={this.state.saturation}
            />
            <label for="lightness">Lightness</label>
            <input placeholder={this.state.lightness} />
            <input
              type="range"
              id="lightness"
              name="lightness"
              min="1"
              max="100"
              onInput={this.slideLightness}
              value={this.state.lightness}
            />
          </fieldset>
          <section
            className="dom"
            style={{
              backgroundColor: `hsl(${this.state.hue},${
                this.state.saturation
              }%,${this.state.lightness}%)`
            }}
          />
        </section>
        <p>
        </p>
      </div>
    );
  }
}

export default ColorPicker;
