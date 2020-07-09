import React from 'react';

import { Container, Card, CardContent, Typography, CardActionArea, Grid, CssBaseline } from '@material-ui/core';
import { useStyles } from './other';

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
        <Container component='main' maxWidth='lg'>
          <div className={classes.wrapper}>
          <Grid container spacing={2} xs className={classes.card}>
            <Grid item>
              <Card>
              <CardActionArea>
                <CardContent>
                  <Typography className={classes.title} color='textSecondary' gutterBottom>
                    Названьице общее(типа нэйм приложения)
                  </Typography>
                  <Typography variant='h5' component='h2' className={classes.name}>
                    Нэйм монетки
                  </Typography>
                  <Typography variant='body2' component='p'>
                    Последняя цена в долларах
                  </Typography>
                  <Typography variant='body3' component='p'>
                    Изменение в процентах
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Card> 
            </Grid>
          </Grid>
          <Grid container spacing={1} xs={4} className={classes.calc}>
            <Grid item>
              Калькуляшка
            </Grid>
          </Grid>
          </div>
        </Container>
    </div>
  );
}

export default App;
