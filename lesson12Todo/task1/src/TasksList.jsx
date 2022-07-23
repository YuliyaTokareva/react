import React, { Component } from 'react';

import Task from './Task.jsx';
import CreateTaskImput from './CreateTaskImput.jsx';
const baseUrl = 'https://62ac36829fa81d00a7ac26c0.mockapi.io/api/v1/tasks-todo';
class TaskList extends Component {
    state = {
        tasks: [],
    };
    onCreate = (text) => {
        //1 Create task object
        //2 Post object to server
        //3 fetch list from server
        // const { tasks } = this.state;
        const newTask = {
            text,
            done: false,
        };

        fetch = (baseUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;utc-8',
            },
            body: JSON.stringify(newTask),
        }).then((response) => {
            if (response.ok) {
                fetch(baseUrl)
                    .then((res) => {
                        if (res.ok) {
                            return response.json();
                        }
                    })
                    .then((tasksList) => {
                        this.setState({
                            tasks: tasksList,
                        });
                    });
            } else {
                throw new Error('Faild to create task');
            }
        });

        // const updatedTasks = tasks.concat(newTask);
        // this.setState({ tasks: updatedTasks });
    };
    handleTaskStatusChange = (id) => {
        const updatedTasks = this.state.tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        this.setState({ tasks: updatedTasks });
        //1.Find task in a list
        //2. tggle done value
        //3. save iupdated list
    };
    handleTaskDelete = (id) => {
        const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({ tasks: updatedTasks });
        //filter tasks
        //update state
    };
    render() {
        const sirtedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
        return (
            <main className="todo-list">
                <CreateTaskImput onCreate={this.onCreate} />
                <ul className="list">
                    {sirtedList.map((task) => (
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
        );
    }
}
export default TaskList;
