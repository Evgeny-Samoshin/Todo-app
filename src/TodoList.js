import React from 'react';
import List from '@material-ui/core/List';
import Todo from './Todo';

const TodoList = (props) => {
    
  const handleActivate = () => {};
  
    return( 
      <List className='list-wrapper'>
        {props.tasks.map((todo, index) => (
          <Todo content={todo} key={index} id={index} onDelete={props.onDelete} onActive={handleActivate} />
          )     
        )}
      </List>
    );
  }

export default TodoList;