import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log("App Rendered!")
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
