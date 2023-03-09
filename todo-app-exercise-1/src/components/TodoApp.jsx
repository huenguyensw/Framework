import React from 'react';
import Todo from './Todo';

/**
 * Part 1: Generate list (See Lists and keys lecture)
 * - Create a function component here, may call it 'TodoApp'
 * - generats a list <ul> from the array below, with the array-method .map()
 * - Place the code for listItems <li>, into a new child (function) component, may call it 'Todo'
 * - Add a key to every listItem <li>
 *
 * Part 2: Add an event to the listItems (See Conditional Rendering lecture)
 * - Begin by creating a new function 'handleClick' in 'TodoApp' component
 * - The function will add a class .done, to the target element (e.target)
 * - Pass down the method as a prop, to the child component 'Todo'
 * - Make sure every listItem has the onClick eventhandler, that calls the method 'handleClick'
 * 
 * Part 3 (hard): Conditional rendering (google how to use conditions with .map() )
 * - Make sure every other listItem has the className="odd"
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.jsx
 */


const todos = [
    { id: 1, task: 'Syssla 1' },
    { id: 2, task: 'Syssla 2' },
    { id: 3, task: 'Syssla 3' },
    { id: 4, task: 'Syssla 4' },
    { id: 5, task: 'Syssla 5' }
];

const TodoApp = () => {
    const handleClick = (e) => {
        e.target.classList.add("done");
    }
    const listOfTasks = todos.map((todo,index) => (
         <Todo key={todo.id} todo={todo.task} handleClick={handleClick}  className = {(index+1)%2 ? 'odd': ''}/>
        ))

    return (
        <>
            <ul>{listOfTasks}</ul>
        </>

    )
}
export default TodoApp

