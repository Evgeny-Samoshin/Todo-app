import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    backgroundColor: '#00bcd438',
  },
  h1: {
    fontFamily: "Roboto",
    fontWeight: 400,
  }
}
);

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography variant="h3" component="h1" color="initial" align="center" className={classes.h1} center>
          My ToDo App
      </Typography>
    </header>

  )
}
export default Header;