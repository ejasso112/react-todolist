//Dependencies
import React, { Component } from "react"
//ToDoItem Component
import ToDoItem from "./TodoItem"
//Import Data
import todoData from "../../todoData"
//ToDoList Component Style
import "./ToDoList.scss"

class ToDoList extends Component {
    constructor() {
        super()
        this.state = {
            todo: todoData
        }
    }
    render() {
        const todoItemComponent = this.state.todo.map(item => <ToDoItem
            key={item.id}
            listItem={item}
        />)
        
        return(
            <div className="todolist">
                {todoItemComponent}
            </div>
        )
    }
}

export default ToDoList