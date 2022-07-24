const baseUrl = 'https://crudcrud.com/api/6814cc7797e24c0e97952e9d3d490d1f/test'

export const createTask = (taskData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;utc-8',
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    })
}

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
        .then((tasksList) => {
            return tasksList.map(({ _id, ...task }) => ({ id: _id, ...task }))
        })
}
export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;utc-8',
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    })
}
export const deleteTask = (taskid) => {
    return fetch(`${baseUrl}/${taskid}`, {
        method: 'DELETE',
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Faild to delete task')
        }
    })
}
