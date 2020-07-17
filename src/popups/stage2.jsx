import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from '../other';


function Stage2({toggler}) {
    const classes = useStyles();
    return(
        <div>
            <Grid item xs={3} position='absolute' className={classes.stage2}>
                <Card>
                    <CardContent>
                        <Typography>
                        Кликнув на эту карточку, ты произведешь выбор 
                той монетки, которую хочешь конвертировать. Она 
                сразу отразиться в конвертере валют.
                        </Typography>
                        <Button onClick={()=>toggler({type:'STAGE2_3'})}>
                            <b>Угу, ога...чо ищё?</b>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default Stage2