import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';


const Sidebar = () => {
    const [tasks, setTasks] = useState([]);
   
    const handleSubmit = task => {
      setTasks([...tasks, task]);
    }
    
    const handleDelete = (index) => {
      const newArr = [...tasks];
      newArr.splice(index, 1);
      setTasks( newArr );
    }

    
      return(
        <div className='wrapper'>
          <div className='card frame'>
            <Header numTodos={tasks.length} />
            <TodoList tasks={tasks} onDelete={handleDelete} />
            <SubmitForm onFormSubmit={handleSubmit} />
          </div>
        </div>
      );
    } 
    

  export default Sidebar;