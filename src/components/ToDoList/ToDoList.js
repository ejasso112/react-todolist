import React from "react"

import ToDoItem from "./TodoItem"
import "./ToDoList.scss"

function ToDoList() {
    return (
        <div className="todolist">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default ToDoList