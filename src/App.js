import React from 'react';
import axios from 'axios';

import { Container, Grid, CssBaseline } from '@material-ui/core';
import { useStyles } from './other';

import { CoinCard, Calc, Search } from './components';
import reducer from './reducer';

function App() {
  // так удобнее контролить монетки да и на случай всякий
  const coins = ['BTC','DASH','DOGE','ETH']; 
  //ADA,BAT,BCH,BSV,BTC,BTG,DASH,'DCR','DAI',DOGE
  //,'EOS','ETH','ETC',IOTA,LTC,QTUM,LINK,LSK,XEM,NEO,USDC,USDT,TRX 
  //,'XLM','XMR',XRP,XTZ,ZEC,'ZRX' доступные тикеры
  const [state, dispatch] = React.useReducer(reducer, {
    coins: [],
    coin1st: {
      name: '',
      price: ''
    },
    coin2nd: {
      name: '',
      price: ''
    },
    clicked: true,
    search: '',
  })

  React.useEffect(() => {
    let clean = false;
    const fetchData = () => {
      coins.map(item => {
        axios
          .get(`https://production.api.coindesk.com/v2/price/ticker?assets=${item}`)
          .then(res =>{
            !clean
            && dispatch({
              type: 'DATA_COINS',
              payload: {
                iso: res.data.data[item].iso,
                name: res.data.data[item].name
              },
            });
          })
      })  
    }
    fetchData();
      
      return () => { clean = true; }
  }, []) 

  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
        <Container component='main' maxWidth='lg'>
          <div className={classes.wrapper}>
            <Grid container spacing={2} xs className={classes.card}>
              
              {state.coins.map((el, index)=>
                <CoinCard 
                  coin={ el } 
                  i={ index } 
                  state={ state } 
                  dispatch={ dispatch }
                  key={ el.iso+el.name } 
                />
              )}

            </Grid>
            <Grid container spacing={1} xs={5} className={classes.calc}>
              <Search dispatch={ dispatch } />
              <Calc state={ state } />
            </Grid>
          </div>
        </Container>
    </div>
  );
}

export default App;
