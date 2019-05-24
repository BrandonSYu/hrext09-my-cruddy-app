import React, { Component } from "react";
import TodoListForm from "./TodoListForm";

export default class TodoList extends React.Component {
    /*
    state = {
      todolist : [],  
      priority : {},
    };
    */
    state = {
        todoobj : {}
    }
    addItem = (item) => {
        //this.state.todos.push(item);
        var obj = Object.assign(item, this.state.todoobj);
        console.log(obj);
    this.setState({
        todoobj : obj
        });
        //console.log(item);
        console.log(JSON.stringify(this.state.todoobj));
    }
    
    render(){
        return (
        <div>
        <TodoListForm onSubmit={this.addItem}/>
            {this.state.todoobj.map(item => (
            <div id = "items">{item.inputText}</div>
            ))}
        </div>
        );
    };
}
