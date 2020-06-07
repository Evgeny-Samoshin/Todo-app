import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';
import Paper from '@material-ui/core/Paper';

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
        <Paper className=''>
          <Header numTodos={tasks.length} />
          <TodoList tasks={tasks} onDelete={handleDelete} />
          <SubmitForm onFormSubmit={handleSubmit} />
        </Paper>
      );
    } 
    

  export default Sidebar;