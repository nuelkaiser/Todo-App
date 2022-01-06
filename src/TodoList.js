import React from 'react';
import TodoItem from './TodoItem';

function TodoList({Change, Todo, setTodo, FilteredTodos, setNumbers, Numbers }) {
    return (

        <>
                {
                    FilteredTodos.map(
                        (todo) => (
                            <TodoItem 
                            Change={Change}
                            Todo={Todo} 
                            setTodo={setTodo}
                            setNumbers ={setNumbers}
                            Numbers={Numbers}
                            completed={todo.completed}
                            id={todo.id}
                            text={todo.text} 
                            key={todo.id}/>
                        )
                    )
                }
        </>
    )
}

export default TodoList
