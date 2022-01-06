import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoInfo from './TodoInfo';
import Instruction from './Instruction';
import TodoLogo from './TodoLogo';
import { useState, useEffect } from 'react';

function Todo({ Changer, Change }) {
    const [Todo, setTodo] = useState([]);
    const [Input, setInput] = useState('');
    const [Status, setStatus] = useState('all');
    const [FilteredTodos, setFilteredTodos] = useState([]);
    const [Numbers, setNumbers] = useState(0);



    useEffect(
        () => {
            saveTodos()
        }, []
    )




    useEffect(
        () => {
            uploadTodos();
            filteredInfo();
        },
        [Todo, Status]
    )


    const multipleDelete = () => {
        const newTodos = Todo.filter((todos) => todos.completed === false);
        setTodo(newTodos)
        console.log(newTodos)
    }


    const uploadTodos = () => {
        localStorage.setItem('todos', JSON.stringify(Todo))
    }

    const saveTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let saved = JSON.parse(localStorage.getItem('todos'))
            setTodo(saved)
        }
    }


    const filteredInfo = () => {
        switch (Status) {
            case 'completed':

                const completed = Todo.filter(
                    todo =>
                        todo.completed === true
                )
                setFilteredTodos(
                    completed
                )
                setNumbers(completed.length)
                break;
            case 'active':

                const active = Todo.filter(
                    todo =>
                        todo.completed === false
                )
                setFilteredTodos(
                    active
                )
                setNumbers(active.length)
                break;
            default:
                setNumbers(Todo.length)
                setFilteredTodos(Todo);
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput('')

        setTodo([
            ...Todo,
            {
                text: Input,
                id: Math.floor(Math.random() * 10000),
                completed: false
            }
        ])
        setNumbers(Todo.length + 1)

    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }




    return (
        <div>
            <div className='todo'>

                <TodoLogo Changer={Changer} Change={Change} />

                <TodoForm Change={Change} handleSubmit={handleSubmit} handleChange={handleChange} Input={Input} />

                <TodoList Change={Change} Todo={Todo} setTodo={setTodo} FilteredTodos={FilteredTodos} setNumbers={setNumbers} Numbers={Numbers} />

                <TodoInfo Change={Change} setStatus={setStatus} Delete={multipleDelete} Numbers={Numbers} />

                <Instruction />
            </div>
        </div>
    )
}

export default Todo
