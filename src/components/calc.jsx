import React from 'react';

import { Card, CardContent, TextField, Grid,} from '@material-ui/core';
import { useStyles } from '../other';

function Calc({state}) {
    const [form, setForm] = React.useState({
        form1:{
            value: '',
        },
        form2:{
            value: '',
        },
        form3:{
            value: '',
        },
    })

    const handleChangeForm1 = (e) =>{
        setForm({
            form1:{
                value: e.target.value,
            },
            form3:{
                value: e.target.value * state.coin1st.price,
            }
        })
    }
    const handleChangeForm2 = (e) =>{
        setForm({
            form2:{
                value: e.target.value,
            },
            form3:{
                value: e.target.value * state.coin2nd.price,
            }
        })
    }
    const handleChangeForm3 = (e) =>{
        setForm({
            form1:{
                value: form.form3.value/state.coin1st.price,
            },
            form2:{
                value: form.form3.value/state.coin2nd.price,
            },
            form3:{
                value: e.target.value,
            }
        })
    }

    console.log()
    const classes = useStyles();
    return(
        <Grid item>
                <Card>
                  <CardContent>
                    <TextField 
                      className={classes.form} 
                      size="small" label={state.coin1st.name} 
                      variant='outlined' 
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='form1'
                      onChange={handleChangeForm1}
                      value={
                        state.coin1st.price
                            &&form.form3.value/state.coin1st.price}
                    />
                    <TextField
                      className={classes.form} 
                      size="small" 
                      label={state.coin2nd.name} 
                      variant='outlined' 
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='form2'
                      onChange={handleChangeForm2}
                      value={
                        state.coin2nd.price
                            &&form.form3.value/state.coin2nd.price}
                    />
                    <TextField
                      className={classes.form} 
                      size="small"
                      label='TETHER/USD' 
                      variant='outlined' 
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='form3'
                      onChange={handleChangeForm3}
                      value={
                        state.coin1st.price
                            &&form.form3.value}
                    />
                  </CardContent>
                </Card>
              </Grid>
    )
}

export default Calc