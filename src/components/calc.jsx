import React from 'react';

import { Card, CardContent, TextField, Grid,} from '@material-ui/core';
import { useStyles } from '../other';


function Calc({state, dispatch}) {
    const { form } = state; 

    const handleChangeForm1 = (e) =>{
        dispatch({
            type: 'FORM1',
            payload:{
                form1: e.target.value,
                form3: e.target.value * state.coin1st.price,
            }
        })
    }
    const handleChangeForm2 = (e) =>{
        dispatch({
            type:'FORM2',
            payload:{
                form2: e.target.value,
                form3: e.target.value * state.coin2nd.price,
            }
        })
    }    
    const handleChangeForm3 = (e) =>{
        dispatch({
            type: 'FORM3',
            payload:{
                form1:form.form3/state.coin1st.price,
                form2:form.form3/state.coin2nd.price,
                form3:e.target.value,
            }
        })
    };

    const classes = useStyles();
    return(
      <Grid item>
        <Card>
          <CardContent>
            <TextField 
              className={ classes.form } 
              size="small" label={ state.coin1st.name } 
              variant='outlined' 
              InputLabelProps={{
                shrink: true,
              }}
              disabled={ !state.coin1st.price }
              name='form1'
              onChange={ handleChangeForm1 }
              value={
                state.coin1st.price
                    &&form.form3/state.coin1st.price
              }
            />
            <TextField
              className={ classes.form } 
              size="small" 
              label={ state.coin2nd.name } 
              variant='outlined' 
              InputLabelProps={{
                shrink: true,
              }}
              disabled={ !state.coin2nd.price }
              name='form2'
              onChange={ handleChangeForm2 }
              value={
                state.coin2nd.price
                  &&form.form3/state.coin2nd.price
              }
            />
            <TextField
              className={ classes.form } 
              size="small"
              label={ !state.coin1st.price? '':'TETHER/USD' } 
              variant='outlined' 
              InputLabelProps={{
                shrink: true,
              }}
              disabled={ !state.coin1st.price }
              name='form3'
              onChange={ handleChangeForm3 }
              value={
                state.coin1st.price
                  &&form.form3
              }
            />
          </CardContent>
        </Card>
      </Grid>
    )
}

export default Calc