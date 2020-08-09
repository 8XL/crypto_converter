import React from 'react';

import { Container, Grid, CssBaseline } from '@material-ui/core';

import { Calc, Search, Learning } from './components';
import { useStyles } from './other';
import { fetchCoin, coins } from './api/fetchDataCoins';
import reducer from './reducer';

const CoinCard = React.lazy(() => import('./components/card'));

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    coins: [],
    coin1st: {
      name: '',
      price: '',
    },
    coin2nd: {
      name: '',
      price: '',
    },
    clicked: true,
    search: '',
    form: {
      form1: '',
      form2: '',
      form3: '',
    },
    refs: {
      ref1: null,
      ref2: null,
    },
  });

  React.useEffect(() => {
    let clean = false;
    const fetchData = () => {
      coins.map(async(item) => {
        const { data } = await fetchCoin(item);
            !clean
            && dispatch({
              type: 'DATA_COINS',
              payload: {
                iso: data[item].iso,
                name: data[item].name
              },
            });
          })
    };
    fetchData();
      
      return () => { clean = true; }
  }, []) 

  const classes = useStyles();
  return (
    <div className="App">
      <Learning state={ state } dispatch={ dispatch } />
      <CssBaseline />
      <Container component='main' maxWidth='lg'>
        <div className={ classes.wrapper }>
          <Grid container spacing={2} md className={ classes.card }>

            <React.Suspense fallback={<div>Подожди-подожди...</div>}>     
              {state.coins.map((el, index)=>
                
                  <CoinCard 
                    coin={ el } 
                    i={ index } 
                    state={ state } 
                    dispatch={ dispatch }
                    key={ el.iso+el.name } 
                  />

              )}
            </React.Suspense>

          </Grid>
          <Grid container spacing={1} xs={4} className={ classes.calc }>
            <Search dispatch={ dispatch } />
            <Calc state={ state } dispatch={ dispatch }/>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default App;
