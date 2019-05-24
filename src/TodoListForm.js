import React, { Component } from "react";

export default class TodoListForm extends React.Component {
    state = {
        inputText : "",
        priority : "0"
    };
    
    changeHandler = (event) => {//onchange handler for text
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    
    submitHandler = (event) => { //form submission
        event.preventDefault();
        this.props.onSubmit({
            inputText : this.state.inputText,
            priority : this.state.priority
        });
        this.setState({//refresh textbox 
            inputText: "",
            priority : "0"
        });
    };
    
    incPriority = (event) =>{
        event.preventDefault();
        var prior = parseInt(this.state.priority)+1;
        this.setState({inputText : this.state.inputText, priority: prior.toString()});
        //console.log(this.state.priority)
    };
    decPriority = (event) =>{
        event.preventDefault();
        var prior = parseInt(this.state.priority)-1;
        this.setState({inputText : this.state.inputText, priority: prior.toString()});
        
        //console.log(this.state.priority)
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
        
        <div>Priority Counter: {this.state.priority}</div>
        <button onClick = {this.submitHandler}>add an item</button>
        <button onClick = {this.incPriority}>+</button>
        <button onClick = {this.decPriority}>-</button>
      </form>
      
    );
  }
}

