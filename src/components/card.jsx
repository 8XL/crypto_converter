import React from 'react';
import axios from 'axios';

import { Card, CardContent, Typography, CardActionArea, Grid } from '@material-ui/core';
import { useStyles } from '../other';

function CoinCard ({ coin, i, state, dispatch }) {
    const classes = useStyles();
    // const arr = Object.entries(coin);
    // const obj = arr[0][1];
    const [form, setForm] = React.useState({
        index: i,
    })
    const [ticker, setTicker] = React.useState({
        price: null,
        percent: null,
    })
    const [count, setCount] = React.useState(0);


    const handleClick = () => {
        console.log(state.clicked)

        if(form.index===i && state.clicked){
            dispatch({
                type: 'SET_CALC_1',
                payload: {
                    name: coin.iso,
                    price: ticker.price,
                    clicked: false,
                }
            })
        } else if(form.index===i && !state.clicked) {
            dispatch({
                type: 'SET_CALC_2',
                payload: {
                    name: coin.iso,
                    price: ticker.price,
                    clicked: true,
                }
            })
        }
    } 

    React.useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count=>
                ++count
            )
        }, 10000)
        
            return ()=> clearInterval(interval);
        
    }, [])
    React.useEffect(() => {
        let clean = false;
        const name = coin.iso;
        const fetchData = async () => {
            const { data } = await axios(`https://production.api.coindesk.com/v2/price/ticker?assets=${name}`);
            setTicker({
                ...ticker,
                price: data.data[name].ohlc.c,
                percent: data.data[name].change.percent
            })
        }
        fetchData();
          
          return () => { clean = true; }
      }, [count]) 
   
    return(
        
            <Grid item>
                <Card>
                    <CardActionArea onClick={e=>handleClick(e)} disabled={coin.iso===state.coin1st.name || coin.iso===state.coin2nd.name }>
                        <CardContent className={classes.card__item}>
                            <Typography className={classes.title} color='textSecondary' gutterBottom>
                                {coin.name}
                            </Typography>
                            <Typography variant='h5' component='h2' className={classes.name}>
                                {coin.iso}
                            </Typography>
                            <Typography variant='body2' component='p'>
                                {ticker.price} $
                            </Typography>
                            <Typography variant='body3' component='p'>
                                {(Math.ceil(ticker.percent * 100) / 100 )} %
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card> 
            </Grid>
        
    )
}

export default CoinCard