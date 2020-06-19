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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = id => {
        this.setState(prevState => {
            const updatedState = prevState.todo.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed
                }

                return item
            })

            return ({
                todo: updatedState
            })
        })
    }
    render() {
        const todoItemComponent = this.state.todo.map(item => 
            <ToDoItem 
                key={item.id}
                listItem={item}
                handleChange={this.handleChange}
            />
        )

        return (
            <div className="todolist">
                {todoItemComponent}
            </div>
        )
    }
}    

export default ToDoList