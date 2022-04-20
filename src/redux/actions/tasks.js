

export const addedTask = payload => ({
    type: 'ADDED_TASK',
    payload
})

export const deleteTask = payload => ({
    type: 'DELETE_TASK',
    payload
})

export const editTask = payload => ({
    type: 'EDIT_TASK',
    payload
})