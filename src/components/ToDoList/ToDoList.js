import React from "react"
import "./ToDoList.scss"
import ToDoItem from "./TodoItem"
import todoData from "../../todoData"

const ToDoList = () => {
    const todoItemComponent = todoData.map(item => 
    <ToDoItem
        key={item.key}
        listItem={item}
    />)
    
    return(
        <div className="todolist">
            {todoItemComponent}
        </div>
    )
}

export default ToDoList