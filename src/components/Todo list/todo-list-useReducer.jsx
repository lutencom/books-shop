import React, {useReducer, useRef, useState} from "react";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/circle-xmark-duotone.svg";
import {ReactComponent as EditIcon} from "../../Assets/shop-logos/edit.svg";
import {ReactComponent as SaveIcon} from "../../Assets/shop-logos/check-double-duotone.svg";
import './todo.scss';
import Close from "../close-icon/close-icon";

const initialState = {
    task: '',
    tasks: [],
    editedTask: '',
    isEditable: false,
    editableID: ''
}

function reducerMethod(state, action) {
    switch (action.type) {
        case 'addTask':
            return {...state, task: action.inputValue};
        case 'addTasks':
            return {
                tasks: [...state.tasks,
                    {
                        taskName: state.task,
                        id: action.id
                    }]
            };
        case 'deleteTask':
            return {tasks: state.tasks.filter((task) => task.id !== action.id)};
        case 'editTask':
            return {...state, editableID: action.id, isEditable: action.editable};
        case 'editTextHandler':
            return {...state, editedTask: action.task};
        case 'saveItem':
            action.editedObject.taskName = (state.editedTask);
            state.tasks.map(obj => action.editedObject || obj);
            return {...state, isEditable: action.editable};
        default:
            throw new Error();
    }
}

const TodoWithReducer = () => {

    const [state, dispatch] = useReducer(reducerMethod, initialState);
    const inputRef = useRef();
    const textHandler = (e) => {
        dispatch({
            type: 'addTask',
            inputValue: e.target.value
        })
    }
    const formHandler = (e) => { //addTasks
        e.preventDefault();
        dispatch({
                type: 'addTasks',
                id: Date.now().toString()
            }
        )
        inputRef.current.value = '';
    }
    const removeItem = (taskId) => {
        dispatch({
            type: 'deleteTask',
            id: taskId
        })
    }
    const editItem = (editId) => {
        dispatch({
            type: 'editTask',
            id: editId,
            editable: true
        })
    }
    const editTextHandler = (e) => {
        dispatch({
            type: 'editTextHandler',
            task: e.target.value
        })
    }
    const saveItem = (id) => {
        dispatch({
            type: 'saveItem',
            editedObject: state.tasks.find((task) => task.id === id),
            editable: false
        })
    }
    return (
        <>
            <h2>To do list using useReducer </h2>
            <form action="" onSubmit={formHandler}>
                <input ref={inputRef} onChange={textHandler} type="text" placeholder='Add here the task...'/>
                <button className='button full'>Add task</button>
            </form>

            {state.tasks &&

            <ul className='tasks'>{state.tasks.map(({taskName, id}, idx) => (
                <li key={idx} className='task'>
                    <span>{idx + 1}</span>.
                    {state.isEditable && state.editableID === id ?
                        <>
                            <input onChange={editTextHandler} defaultValue={taskName} type="text"/>

                            <div className="icons">
                                <span onClick={() => saveItem(id)} className="save icon"><SaveIcon/></span>
                                <Close remove={removeItem} id={id} className="remove icon"><CloseIcon/></Close>
                            </div>
                        </>
                        :
                        <>
                            <span className='task-item'>{taskName}</span>
                            <div className="icons">
                                <span onClick={() => editItem(id)} className="edit icon"><EditIcon/></span>
                                <Close remove={removeItem} id={id} className="remove icon"><CloseIcon/></Close>

                            </div>
                        </>}
                </li>

            ))
            }</ul>}
        </>
    )
}
export default TodoWithReducer;