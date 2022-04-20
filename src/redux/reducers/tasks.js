const initialState = {
    todoTasks: [
        {
            name: 'task 1'
        }
    ]
}

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_TASK':
            return {
                ...state,
                todoTasks: [...state.todoTasks, action.payload]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                todoTasks: action.payload
            }
        case 'EDIT_TASK':
            return {
                ...state,
                todoTasks: action.payload
            }
        default:
            return state
    }
}