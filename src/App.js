//Dependencies
import React, { Component } from "react"
//ToDoListComponent
import ToDoList from "./components/ToDoList/ToDoList"
//App Component Style
import "./App.scss"

class App extends Component {
    render() {
        return (    
            <ToDoList />
        )
    }
}

export default App