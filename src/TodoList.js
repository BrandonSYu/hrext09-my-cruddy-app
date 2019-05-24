import React, { Component } from "react";
import TodoListForm from "./TodoListForm";

export default class TodoList extends React.Component {
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
        <TodoListForm onSubmit={this.addItem}/>
            {this.state.todolist.map(item => (
            <div id = "items">{item.inputText}</div>
            ))}
        </div>
        );
    };
}
