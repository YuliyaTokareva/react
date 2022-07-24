import React, { Component } from 'react'

import Task from './Task.jsx'
import CreateTaskImput from './CreateTaskImput.jsx'
import { createTask, fetchTasksList, updateTask, deleteTask } from './taskGateway.js'
//const baseUrl = 'https://crudcrud.com/api/6814cc7797e24c0e97952e9d3d490d1f/test'

class TaskList extends Component {
    state = {
        tasks: [],
    }
    componentDidMount() {
        this.fetchTasks()
    }
    fetchTasks = () => {
        fetchTasksList().then((tasksList) => {
            this.setState({
                tasks: tasksList,
            })
        })
    }
    onCreate = (text) => {
        const newTask = {
            text: text,
            done: false,
        }
        createTask(newTask).then(() => this.fetchTasks())
    }
    handleTaskStatusChange = (id) => {
        const { done, text } = this.state.tasks.find((task) => task.id === id)
        const updatedTask = {
            text,
            done: !done,
        }
        updateTask(id, updatedTask).then(() => this.fetchTasks())
    }
    handleTaskDelete = (id) => {
        deleteTask(id).then(() => this.fetchTasks())
    }
    render() {
        const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done)
        return (
            <main className="todo-list">
                <CreateTaskImput onCreate={this.onCreate} />
                <ul className="list">
                    {sortedList.map((task) => (
                        <Task
                            key={task.id}
                            text={task.text}
                            done={task.done}
                            id={task.id}
                            onChange={this.handleTaskStatusChange}
                            onDelete={this.handleTaskDelete}
                        />
                    ))}
                </ul>
            </main>
        )
    }
}
export default TaskList
