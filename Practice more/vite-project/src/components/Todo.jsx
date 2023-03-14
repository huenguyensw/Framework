import React from 'react'
import Task from './Task';

const Todo = ({ listTask, childToParent, deleteTask}) => {
    const listOfDoing = listTask.map((task,index) => <Task key={index} task={task} childToParent={childToParent} hide={false} deleteTask={deleteTask}/>);
    return (
        <>
            <section id='todo' className='task-area'>
                <h2>Att göra</h2>
                <ul>{listOfDoing}</ul>
            </section>
        </>
    )
}

export default Todo
