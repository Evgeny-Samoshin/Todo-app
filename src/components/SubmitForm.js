import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SubmitForm = (props) => {

    const classes = useStyles();

    const [term, setTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(term === '') return;
      props.onFormSubmit(term);
      setTerm( '' );
    }

    return(
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField 
          type='text'
          className='input'
          placeholder='Enter Item'
          value={term}
          onChange={(e) => {setTerm(e.target.value)}}
        />
        <Button className='' variant="contained" color="primary" type='submit'>Add</Button>
      </form>
    );
  }


  export default SubmitForm;