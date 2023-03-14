import React from 'react'
import Task from './Task';

const DoneTask = ({listDoneTask, deleteTask}) => {
    const listOfDone = listDoneTask.map((task,index) => <Task key={index} task={task} hide={true} deleteTask={deleteTask}/>);
    return (
        <section className='task-area' >
            <h2>Färdig</h2>
            <ul>{listOfDone}</ul>
        </section>
    )
}

export default DoneTask
