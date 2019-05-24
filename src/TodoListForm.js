import React, { Component } from "react";

export default class TodoListForm extends React.Component {
    state = {
        inputText : ""
    };
    
    changeHandler = (event) => {//onchange handler for text
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    
    submitHandler = (event) => { //form submission
        event.preventDefault();
        this.props.onSubmit({
            inputText : this.state.inputText
        });
        this.setState({//refresh textbox 
            inputText: ""
        });
    };
    
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          name="inputText"
          value={this.state.inputText}
          onChange={this.changeHandler}
          placeholder="Enter something todo..."
        />
        <button onClick={this.submitHandler}>add an item</button>
      </form>
    );
  }
}

