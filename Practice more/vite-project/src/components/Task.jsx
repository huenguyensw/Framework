import React, { useState, useEffect} from 'react'
//import { Button } from 'semantic-ui-react';


const Task = ({task, childToParent, hide, deleteTask}) => {
    const [readonly, setReadonly] = useState(true);
    const [updateTask, setupdateTask] = useState(task.name);
    

    const onEdit = (e) => {
        setReadonly(!readonly);
    }

    

    const handleChange = (e) => {
        setupdateTask(e.target.value);
         task.name = e.target.value;
    }

    let label = readonly ? 'Ändra' : 'Spara';
    return (
        <li>
            <input type='text' value={task.name} onChange={handleChange} disabled={readonly}></input>
            <button onClick={onEdit}>{label}</button>
            <button onClick={()=> childToParent(task)} hidden = {hide}>Färdig</button>
            <button onClick={()=> deleteTask(task)}>Radera</button>
            
        </li>

    )
}

export default Task
