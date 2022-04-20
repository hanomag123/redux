import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addedTask, deleteTask, editTask} from './redux/actions/tasks';

import './styles.css'

const AppComponent = ({ task, addedTaskNew, deleteTaskNew, editTaskNew}) => {
    const createNewTask = () => {
        const name = prompt('name');
        addedTaskNew({
            name
        })
    }

    const removeTask = index => {
        const mutateTask = [...task]
        mutateTask.splice(index, 1)
        deleteTaskNew(mutateTask)
    }

    const editTask = index => {
        const editInput = prompt(task[index].name, task[index].name)
        const mutateTask = [...task]
        mutateTask.splice(index, 1, {name: editInput})
        editTaskNew(mutateTask)
    }

    return (
        <div className='container'>
            {
                task.map((el, index) => (
                    <div key={index}>
                        {el.name}
                        <button onClick={() => removeTask(index)}>x</button>
                        <button onClick={() => editTask(index)}>Edit</button>
                    </div>
                ))
            }
            <button onClick={createNewTask}>новая задача</button>
        </div>
    )
}

const mapStateToProps = state => ({
    task: state.tasks.todoTasks
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addedTaskNew: addedTask,
    deleteTaskNew: deleteTask,
    editTaskNew: editTask
}, dispatch)

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);