import React from "react";
import ReactDOM from "react-dom";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      morning: "",
      afternoon: "",
      night: "",
      counter: 0,
      increment: 1
    };
  }

  //lifecycle hooks
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((oldstate, val) => {
        counter: oldstate.currentTime + 1;
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div>
        <h4>Time is {this.state.counter}</h4>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));

//babel expects es2015
// we need something that can presets es2016 to es2015
/**
 * What is State?
 * 1) One Day , generally we're having 3 states - morning, afternoon and night
 * 2) State determincs, how a component renders and behaves
 *
 */
