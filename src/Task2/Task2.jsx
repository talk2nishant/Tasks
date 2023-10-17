import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import { v4 as uuid } from 'uuid';


const Task2 = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const navigate = useNavigate()
    const home = () => {
        navigate('/')
    }

    const addTodoItem = () =>{
        if (todo === '') {
            alert('Item is required');
            return;
        }
        setTodos((prevState) => [...prevState, {
            id: uuid(),
            item: todo,
            status: 'pending'
        }]);
        setTodo('');
       
    }

    const removeTodo = (item) => {
        const newTodos = todos.filter((t) => t.id !== item.id);
        setTodos(newTodos);
    }

    const deleteAllItems = () => setTodos([]);

    const task2 = () =>(
        <div className='maincontainer'>
            <div className='maincontainer_home'>
                <button onClick={home}>Home</button>
            </div>
            <div className='maincontainer_todoList'>
                <div className='maincontainer_todoList_heading'>
                    <h1>ToDo List</h1>
                    <hr />
                </div>
                <div className='maincontainer_todoList_add'>
                    <input type="text" placeholder='add items.....' value={todo} onChange={({ target: { value } }) => setTodo(value)} />
                    <button onClick={addTodoItem}>Add Todo</button>
                    <button onClick={deleteAllItems}>Delete All</button>
                </div>
                {
                    todos.map((t)  => (
                        <div className='maincontainer_todoList_result' key={t.id}> 
                            <div className='maincontainer_todoList_result_heading'>
                                <h4 >{t.item}</h4>
                            </div>
                            <div className='maincontainer_todoList_result_button'>
                                <button onClick={() => removeTodo(t)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
  return (
    <div>
        {task2()}
    </div>
  )
}

export default Task2