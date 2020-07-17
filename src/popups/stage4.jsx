import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from '../other';


function Stage4({toggler}) {
    const classes = useStyles();
    return(
        <div>
            <Grid item xs={3} position='absolute' className={classes.stage4}>
                <Card>
                    <CardContent>
                        <Typography>
                        Вторая строка отражает вторую карточку 
            которую ты выберешь(если выберешь). Так удобнее 
            сравнить валютную пару при аналогичной стоимости.
                        </Typography>
                        <Button onClick={()=>toggler({type:'STAGE4_5'})}>
                            <b>Душишь уже, как остановить?</b>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}

export default Stage4