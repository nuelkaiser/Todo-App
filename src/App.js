import { useState } from 'react';
import Todo from './Todo';
import './App.css';
import darkBck from './images/bg-desktop-dark.jpg'
import lightBck from './images/bg-desktop-light.jpg'



function App() {

  const [Change, setChange] = useState(false);
  function changer() {
    setChange(!Change)
  }

  return (
    <div className="App">
      <img className='bck' src={Change ? lightBck : darkBck} alt='background' />
      <Todo Changer={changer} Change={Change}  />
      <div className={Change ? 'white-major' : 'major'}> </div>
    </div>
  );
}

export default App;
