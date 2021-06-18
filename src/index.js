import React from "react";
import ReactDOM from "react-dom";
import AnimateHeight from "./AnimateHeight.js";

import "./styles.css";

class App extends React.Component {
  state = {
    height: "auto"
  };

  handleClick = () => {
    this.setState({
      height: this.state.height === 0 ? "auto" : 0
    });
  };

  render() {
    return (
      <div className="App">
        <AnimateHeight
          height={this.state.height}
          duration={500}
          className="AnimateHeight"
          contentClassName="Content"
        >
          <h1>Hello</h1>
          <h2>Click toggle button to animate height</h2>
        </AnimateHeight>
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
