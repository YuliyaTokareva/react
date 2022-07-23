import React, { Component } from 'react';
import TaskList from './TasksList.jsx';

const TodoList = () => {
    return (
        <>
            <h1 className="title">Todo List</h1>
            <TaskList />
        </>
    );
};

export default TodoList;
