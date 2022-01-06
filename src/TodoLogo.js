import React from 'react';
import Sun from './images/icon-sun.svg';
import Moon from './images/icon-moon.svg';

function TodoLogo({Change, Changer}) {
    return (
        <>
            <div className='logo-change' >
                <h1>TODO</h1>
                <img onClick={Changer} src={Change ? Moon : Sun} alt='sun-icon' />
            </div>
        </>
    )
}

export default TodoLogo
