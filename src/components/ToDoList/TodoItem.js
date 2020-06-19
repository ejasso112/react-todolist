//Dependencies
import React, { Component } from "react"

class ToDoItem extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick = () => {
        this.props.handleChange(this.props.listItem.id)
    }

    render() {
        return (
            <div className="todolist__item">
                <label className="todolist__customcheckbox">
                    <input className="todolist__checkbox" type="checkbox" checked={this.props.listItem.completed} onChange={this.handleClick}/>
                    <span className="todolist__tick"></span>
                </label>
                <p className="todolist__text">{this.props.listItem.text}</p>
            </div>
        )
    }
}

export default ToDoItem