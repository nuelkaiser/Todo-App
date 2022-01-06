import React from 'react'

function Checkbutton( {Change, Check} ) {
    return (
        <label className={Change ? 'dark-checkbox-label' : 'checkbox-label'}>
            <input type='checkbox'/>
            <span className='checkbox-custom' onClick={Check} ></span>
        </label>
    )
}

export default Checkbutton
