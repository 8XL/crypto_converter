import React from 'react';
import axios from 'axios';

import { Card, CardContent, Typography, CardActionArea, Grid } from '@material-ui/core';
import { useStyles } from '../other';
import { fetchCoin } from '../api/fetchDataCoins'

function CoinCard ({ coin, i, state, dispatch }) {
    const classes = useStyles();
    // const arr = Object.entries(coin);
    // const obj = arr[0][1];
    const form = {
        index: i,
    };
    const [ticker, setTicker] = React.useState({
        price: null,
        percent: null,
    })
    const [count, setCount] = React.useState(0)
    const[color, setColor] = React.useState('');

    const handleClick = () => {
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
    };

    const btn = React.useRef();

    React.useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count=>
                ++count
            )
        }, 10000)
            return ()=> clearInterval(interval);
    }, [])
    React.useEffect(() => {
        const name = coin.iso;
        const fetchData = async () => {
            const { data }  = await fetchCoin(name);
            if(ticker.price)
                if(ticker.price > data[name].ohlc.c){
                    setColor(classes.red)
                } else {
                    setColor(classes.green)
                } // все равно коряво, да?

            setTicker({
                ...ticker,
                price: data[name].ohlc.c,
                percent: data[name].change.percent
            })
        }
        fetchData();
    }, [count]);
    React.useEffect(()=>{
        let clean = false;
        if(i===0 && !clean){
            dispatch({
                type:'REF1',
                payload: btn.current,
        })} else if(i===1 && !clean){
                dispatch({
                type:'REF2',
                payload: btn.current,
        })}
        
        return ()=> { clean = true }
    },[]);

    let itemHidden;
    if(state.search){
        if(coin.name.search(state.search) < 0 
            && coin.iso.search(state.search) < 0){
                itemHidden = classes.hidden
        } else {
            itemHidden = ''
        }
    };

    return(
        <Grid item className={ itemHidden }>
            <Card className={ color }>
                <CardActionArea 
                    ref={ btn }
                    onClick={ handleClick } 
                    disabled={
                        coin.iso===state.coin1st.name 
                        || coin.iso===state.coin2nd.name 
                    }>
                    <CardContent className={ classes.card__item }>
                        <Typography 
                            className={ classes.title } 
                            color='textSecondary' 
                            gutterBottom
                        >
                            {coin.name}
                        </Typography>
                        <Typography 
                            variant='h5' 
                            component='h2' 
                            className={ classes.name }
                        >
                            { coin.iso }
                        </Typography>
                        <Typography variant='body2' component='p' >
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