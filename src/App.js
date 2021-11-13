import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minValue: "",
      maxValue: "",
      randomNum: ""
    };
  }

  handleMinNumber = (e) => {
    this.setState({ minValue: e.target.value });
  };
  handleMaxNumber = (e) => {
    this.setState({ maxValue: e.target.value });
  };

  generateBtn = () => {
    const { minValue, maxValue } = this.state;
    this.setState({ randomNum: this.getRandomInt(minValue, maxValue) });
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
  handleClearInput = () => {
    this.setState({ minValue: "", maxValue: "" });
  };

  render() {
    const { minValue, maxValue, randomNum } = this.state;

    return (
      <div className="App">
        <h1>Random number generator</h1>
        <p> {randomNum}</p>
        <span> Number 1 </span>
        <input value={minValue} onChange={this.handleMinNumber}></input>
        <span> Number 2 </span>
        <input value={maxValue} onChange={this.handleMaxNumber}></input>
        <div className="buttons">
          <button onClick={this.generateBtn}> Generate </button>
          <button onClick={this.handleClearInput}> Clear </button>
        </div>
      </div>
    );
  }
}
export default App;
