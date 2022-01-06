import React from 'react'

function TodoInfo({Change, setStatus, Delete, Numbers  }) {

    const newEvent = (e) => {
        setStatus(e.target.value)
    }

    

    return (
        <>
            <div className={Change ? 'white-info' : 'info'}>
                <div>
                    {Numbers} items left
                </div>

                <div className={Change ? 'new-state' : 'state'}>
                    <option onClick={newEvent} value='all'>  
                        All
                    </option>
                    <option onClick={newEvent} value='active'>
                        Active
                    </option> 
                    <option onClick={newEvent} value='completed' >
                        Completed
                    </option>
                </div>

                <button className={Change ? 'white-clear' : 'clear'} onClick={Delete} >
                    Clear Completed
                </button>
            </div>
        </>
    )
}

export default TodoInfo
