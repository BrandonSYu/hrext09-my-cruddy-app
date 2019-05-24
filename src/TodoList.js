import React, { Component } from "react";
import TodoListForm from "./TodoListForm";

export default class TodoList extends React.Component {
    
    state = {
        todolist : [],
    }
    
    addItem = (item) => {
        //this.state.todos.push(item);
        //var obj = Object.assign(item, this.state.todoobj);
    this.setState({
        todolist : [item, ...this.state.todolist]
        //priority : this.state.priority
        });
        console.log(item);
        //console.log(JSON.stringify(this.state.todoobj));
        window.localStorage.setItem(item.inputText, item.priority);
    }
    sortPriority =(event) =>{
        event.preventDefault();
        var copy = this.state.todolist;
        for(var i = 0; i < copy.length; i++){//sort by ascending priority
            var largestIndex = i;
            var todo = copy[i];
            for(var j = i; j<copy.length; j++){
                if(copy[j].priority < todo.priority){
                    largestIndex = j;
                    todo = copy[j];
                }
            }
            copy.unshift(todo);
            copy.splice(largestIndex+1, 1)
        }
        this.setState({todolist : copy});
        //console.log(copy);
        //console.log(this.state.todolist);
    }
    removeItem = (item) => {
        console.log("removeItem");
        //if(JSON.stringify(item) === this.state.todolist[i]
        this.setState({todolist : this.state.todolist.filter(x => JSON.stringify(x) !== JSON.stringify(item))})
    }

    render(){
        console.log("TodoList rendered!");     
        return (
        <div>
        <TodoListForm onSubmit={this.addItem}/>
            {this.state.todolist.map(item => (      
            <div id = "items">{item.inputText} *{item.priority}</div>
            ))}
            <button onClick = {this.sortPriority}>Sort</button>
        </div>
        );
    };
}
