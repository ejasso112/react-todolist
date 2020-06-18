//Dependencies
import React, { Component } from "react"

class ToDoItem extends Component {
    render(props) {
        let isChecked = this.props.listItem.completed

        return (
            <div className="todolist__item">
                <label className="todolist__customcheckbox">
                    <input className="todolist__checkbox" type="checkbox" checked={isChecked}/>
                    <span className="todolist__tick"></span>
                </label>
                <p className="todolist__text">{this.props.listItem.text}</p>
            </div>
        )
    }
}

export default ToDoItem