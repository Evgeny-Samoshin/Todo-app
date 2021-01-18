import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
  overflow: {
    overflowWrap: 'break-word'
  },
})
)
  const Todo = (props) => {

    const classes = useStyles();

    return(
        <ListItem disableGutters={true}>
          <ListItemIcon>
            <Checkbox/>
          </ListItemIcon>
          <ListItemText multiline primary={props.content} className={classes.overflow}/>
          <IconButton aria-label="upload picture" onClick={() => {props.onDelete(props.id)}}>
            <DeleteIcon/>
          </IconButton>
        </ListItem>   
    );
  }

export default Todo;