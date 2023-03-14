import React, { useState, useEffect } from 'react'
import AddTask from './AddTask';
import DoneTask from './DoneTask';
import Todo from './Todo';


const TasksManagement = () => {
    const [task, setTask] = useState('');
    
    const [listDoingTask, setListDoingTask] = useState([]);
    const [listDoneTask, setListDoneTask] = useState([]);

    // const [listOfDoing, setListOfDoing] = useState([]);
    // const [listOfDone, setListOfDone] = useState([]);

    const [id, setId] = useState(0);
    
   



    const handleInput = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setListDoingTask([...listDoingTask, {id: id, name: task, state: 'doing' }]);
        setId(id+1);
    }

    const childToParent = (task) => {
        let index = listDoingTask.findIndex((obj => obj.id === task.id));
        task.state = 'done';
        console.log(index);

        listDoingTask.splice(index,1);
        setListDoingTask(listDoingTask);

        setListDoneTask(listDoneTask => [...listDoneTask, task]);
    }
    
    const deleteTask = (task) =>{
        const execute = task.state == 'doing' ? setListDoingTask(listDoingTask => listDoingTask.filter((item) => item != task)) : setListDoneTask(listDoneTask => listDoneTask.filter((item) => item != task))

    }

    return (
        <div className='form'>
            <AddTask task={task} handleInput={handleInput} handleSubmit={handleSubmit} />
            <Todo listTask={listDoingTask} childToParent={childToParent} deleteTask={deleteTask} />
            <DoneTask listDoneTask={listDoneTask} deleteTask={deleteTask} />

        </div>
    )
}

export default TasksManagement
