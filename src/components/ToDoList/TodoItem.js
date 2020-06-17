import React from "react"

function ToDoItem() {
    return (
        <div className="todolist__item">
            <label className="todolist__customcheckbox">
                <input className="todolist__checkbox" type="checkbox"/>
                <span className="todolist__tick"></span>
            </label>
            <p className="todolist__text">Placeholder Text  Here.</p>
        </div>
    )
}

export default ToDoItem