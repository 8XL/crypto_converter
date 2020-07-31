import React from 'react';

import { Card, CardContent, TextField, Grid,} from '@material-ui/core';
import { useStyles } from '../other';

function Search ({ dispatch }) {

    const handleChange = (e) =>{
        const mask = new RegExp(e.target.value, 'ig');
        dispatch({
            type: 'SEARCH_VALUE',
            payload: mask,
        })
    };

    const classes = useStyles();
    return(
        <Grid item>
            <Card>
                <CardContent>
                    <TextField 
                        className={classes.form} 
                        size="small" 
                        label='SEARCH'
                        variant='outlined' 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name='search'
                        onChange={handleChange}
                    />
                    </CardContent>
                </Card>
              </Grid>
    )
}

export default Search