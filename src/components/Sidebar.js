import React, { useState } from 'react';
import Title from './Title';
import ListItem from './ListItem'
import SubmitForm from './SubmitForm';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'

const useStyles = makeStyles({
  sidebar: {
    backgroundColor: '#fff8dc'
  }
})
const Sidebar = ({ children }) => {

  const classes = useStyles();

  const [tasks, setTasks] = useState([]);

  const handleSubmit = task => {
    setTasks([...tasks, task]);
  }

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  return (
    <Paper className={classes.sidebar}>
      <Title numTodos={tasks.length}>{children}</Title>
      <List className='list-wrapper'>
        {tasks.map((todo, index) => (
          <ListItem content={todo} key={index} id={index} onDelete={handleDelete} />
        )
        )}
      </List>
      <SubmitForm onFormSubmit={handleSubmit} />
    </Paper>
  );
}


export default Sidebar;