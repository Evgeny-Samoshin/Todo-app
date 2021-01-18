import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import Content from './Content';
import Grid from '@material-ui/core/Grid'
import Header from './Header';

// import './style.scss'

function App() {

  return (
    <Container >
      <Header />
      <Grid container direction="row" spacing={1}>
        <Grid item sm={3}>
          <Sidebar>Списки дел</Sidebar>
        </Grid>
        <Grid item sm={9}>
          <Content>Список задач</Content>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;