import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.currentstate ? (
          <h4 currenttime = {this.props.time}>Time is {this.props.time}</h4>
        ) : (
          <h4>Date is {this.props.date}</h4>
        )}
      </div>
    );
  }
}

class Root extends React.Component {
  constructor() {
    super(); // should be called before any other statement
    this.state = {
      morning: "",
      afternoon: "",
      night: "",
      currentTime: new Date(),
      showdate: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //lifecycle hooks
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: new Date()
      });
    }, 1000);
  }

  /**
   * What are Props?
   * 1) Props are basically properties of a component?
   * 2) What's the differnce between props and states?
   *  --> props can't be modified but state can be modified
   *  --> we don't know the implementation of props(like how they exists and from where they are coming, we are just using them)
   *  --> props are rendered using this.props and states are rendered using this.state
   *
   * 1) render() - required method in class component
   *  --> it examines this.props and this.state
   *  --> It returns below things :
   *    > React Elements - JSX(Javascript + HTML) eg <div/> or <MyComponent/>  or <span/>
   *    > this elements instructs React to render a DOM Node or user defined component.
   *  --> It can return Arrays and Fragments ( *************)
   *  --> It can return strings and numbers, booleans and null
   *  --> portals : port the things from one component to another // props is parent and child ( *********** )
   * 2) constructor(props)
   *  --> it is called before our render function and before anything is mounted
   * 3) componentDidUpdate(prevProps) - occurs when any update occurs
   * 4) getSnapShopBeforeUpdate()// very rare
   * 5) shouldComponentUpdate()
   * */

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClick() {
    this.setState(mystate => ({ showdate: !mystate.showdate }));
    //this.setState({showdate : !this.state.showdate}); // not a good code because it leads to inconsistent data > async is not handled
  }

  render() {
    return (
      <div>
        <Child currentstate={this.state.showdate} time={this.state.currentTime.toLocaleTimeString()} date={this.state.currentTime.toLocaleDateString()}/>
        <button onClick={this.handleClick}>
          {!this.state.showdate ? "Show Date" : "Show Time"}
        </button>
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
