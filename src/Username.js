import React, { Component } from "react";
import UsernameForm from "./UsernameForm";

export default class Username extends React.Component {
    state = {
      todolist : []  
    };
    addItem = (item) => {
        //this.state.todos.push(item);
    this.setState({
        todolist : [item, ...this.state.todolist]
        });
    }
    
    render(){
        return (
        <div>
        <UsernameForm onSubmit={this.addItem}/>
            {this.state.todolist.map(item => (
            <div id = "items">{item.inputText}</div>
            ))}
        </div>
        );
    };
}