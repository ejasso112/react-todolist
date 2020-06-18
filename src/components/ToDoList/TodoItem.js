import React from "react"

const ToDoItem = props => {
    return (
        <div className="todolist__item">
            <label className="todolist__customcheckbox">
                <input className="todolist__checkbox" type="checkbox" checked={props.listItem.completed && "checked"}/>
                <span className="todolist__tick"></span>
            </label>
            <p className="todolist__text">{props.listItem.text}</p>
        </div>
    )
}

export default ToDoItem