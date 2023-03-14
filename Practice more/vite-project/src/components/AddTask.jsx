import React from 'react'

const AddTask = ({task, handleInput, handleSubmit}) => {
    return (
        <section className='add-task'>
            <input type='text' name='task' value={task} onChange={handleInput} placeholder='Din syssla'></input>
            <button onClick={handleSubmit}>Lägg till</button>
            <button>Återställ</button>
        </section>
    )
}

export default AddTask
