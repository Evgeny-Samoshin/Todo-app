import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import Content from './Content';
import Grid from '@material-ui/core/Grid'

function App () {

    return (
        <Container >
           <Grid container direction="row">
               <Grid item sm={3}>
                    <Sidebar />
               </Grid>
               <Grid item sm={9}>
                    <Content />
               </Grid>
           </Grid>
        </Container>
    )
}

export default App;