import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    
    return( 
      <div className='list-wrapper'>
        {props.tasks.map((todo, index) => (
          <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
          )     
        )}
      </div>
    );
  }

export default TodoList;