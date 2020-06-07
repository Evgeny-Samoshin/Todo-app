import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
  },
}));

  const Header = (props) => {
    const classes = useStyles();

    return(
      <Typography variant="h4" component="h1" color="initial" className={classes.root}>
        You have {props.numTodos} Todos
      </Typography>
    )
  }
export default Header;