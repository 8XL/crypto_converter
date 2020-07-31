import React from 'react';
import axios from 'axios';

import { Container, Grid, CssBaseline } from '@material-ui/core';

import { CoinCard, Calc, Search, Learning } from './components';
import reducer from './reducer';
import { useStyles } from './other';

// так удобнее контролить монетки, да и на случай всякий
const coins = ['BTC','DASH','DOGE','ETH','DCR','DAI',
'EOS','ETH','ETC',
'XLM','XMR'
,'ZRX']; 
//ADA,BAT,BCH,BSV,BTC,BTG,DASH,DOGE
//,IOTA,LTC,QTUM,LINK,LSK,XEM,NEO,USDC,USDT,TRX 
//,,XRP,XTZ,ZEC доступные тикеры

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
