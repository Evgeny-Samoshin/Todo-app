import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
  text: {
    overflowWrap: 'break-word',
    marginLeft: 16
  },

})
)
  const Todo = (props) => {

    const classes = useStyles();

    return(
        <ListItem disableGutters={true}>
          <ListItemText multiline primary={props.content} className={classes.text}/>
          <IconButton aria-label="upload picture" onClick={() => {props.onDelete(props.id)}}>
            <DeleteIcon/>
          </IconButton>
        </ListItem>
    );
  }

export default Todo;