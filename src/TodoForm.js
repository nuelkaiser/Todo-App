import React from 'react';
import Checkbutton from './Checkbutton';

  
function TodoForm({ Change, handleSubmit, handleChange, Input, Check }) {
    return (
        <form className={Change ? 'white-list create' : 'list create'} onSubmit={handleSubmit} >

          <Checkbutton Change={Change} Check={Check} />
          
            <input type='text'
                placeholder='Create a new todo...'
                className={Change ? 'white-place' : 'place'}
                name='text'
                value={Input}
                onChange={handleChange}
            />
        </form>
    )
}

export default TodoForm
