import React, {useState} from "react";
import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/circle-xmark-duotone.svg";
import {ReactComponent as EditIcon} from "../../Assets/shop-logos/edit.svg";
import {ReactComponent as SaveIcon} from "../../Assets/shop-logos/check-double-duotone.svg";
import './todo.scss';
import Close from "../close-icon/close-icon";

const Todo = () => {
    const [task, addTask] = useState('');
    const [editedTask, editTask] = useState('');
    const [tasks, addTasks] = useState([]);
    const [localStorageTasks, addLocalStorageTasks] = useState([]);
    const [isEditable, setEditable] = useState(false);
    const [editableID, setEditableID] = useState();

    const textHandler = (e) => {
        addTask(e.target.value);
    }
    const formHandler = (e) => {
        e.preventDefault();
        const idTask = Date.now().toString();
        const taskObject = {
            taskName: task,
            id: idTask
        }
        addTasks([...tasks, taskObject]);

        localStorage.setItem(
            'tasks',
            JSON.stringify({tasks}),
        );
        addTask('');
        const storedTasks = JSON.parse(
            localStorage.getItem('tasks')
        );
        addLocalStorageTasks(storedTasks);
        console.log(localStorageTasks)
    }


    const removeItem = (id) => {
        addTasks(tasks.filter((task) => task.id !== id))
    }

    const editItem = (id) => {
        setEditableID(id);
        setEditable(true)
    }
    const editTextHandler = (e) => {
        editTask(e.target.value);
    }
    const saveItem = (id) => {
        const editedObject = tasks.find((task) => task.id === id);
        editedObject.taskName = (editedTask);
        tasks.map(obj => editedObject || obj);
        setEditable(false);
    }
    return (
        <>
            <h2>To do list</h2>
            <form action="" onSubmit={formHandler}>
                <input onChange={textHandler} type="text" value={task} placeholder='Add here the task...'/>
                <button className='button full'>Add task</button>
            </form>

            {tasks &&
            <ul className='tasks'>{tasks.map(({taskName, id}, idx) => (
                <li key={idx} className='task'>
                    <span>{idx + 1}</span>.
                    {isEditable && editableID === id ?
                        <>
                            <input onChange={editTextHandler} defaultValue={taskName} type="text"/>

                            <div className="icons">
                                <span onClick={() => saveItem(id)} className="save icon"><SaveIcon/></span>
                                <Close remove = {removeItem} id = {id} className="remove icon"><CloseIcon/></Close>
                            </div>
                       </>
                        :
                        <>
                            <span className='task-item'>{taskName}</span>
                            <div className="icons">
                                <span onClick={() => editItem(id)} className="edit icon"><EditIcon/></span>
                                <Close remove = {removeItem} id = {id} className="remove icon"><CloseIcon/></Close>

                            </div>
                        </>}
                </li>

            ))
            }</ul>}
        </>
    )
}
export default Todo;