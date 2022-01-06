import React from 'react'
import Checkbutton from './Checkbutton';
import cross from './images/icon-cross.svg'

function TodoItem({ Change, text, Todo, id, completed, Numbers, setNumbers, setTodo}) {

    const Delete = () => {
        const newTodo =  Todo.filter( (el) => el.id !== id )
        setTodo(newTodo)
        setNumbers(Numbers - 1)
        console.log(Numbers)
    }



    const Check = () => {

        const complete = Todo.map(
            (item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            }
        )

        setTodo(
            complete
        )
    }

    return (
        <div>
            <div className='delete-container' >
                <div className={Change ? 'white-list' : 'list'}>
                    <Checkbutton  Change={Change} Check={Check} />
                    <span className={completed ? 'check-pls' : ''} >
                        {text}
                    </span>
                </div>

                <img src={cross} alt='cross'  className='cross' onClick={Delete}/>
            </div>
        </div>
    )
}

export default TodoItem
