import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from '../other';


function Stage3({toggler}) {
    const classes = useStyles();
    return(
        <div>
            <Grid item xs={3} position='absolute' className={classes.stage3}>
                <Card>
                    <CardContent>
                        <Typography>
                            А тут уже тот самый конвертер. Вводи итересующее 
                            количество монет и наблюдай результат в нижней строке 
                            (TEHER/USD). Конвертация производится в фиат доллара, 
                            так что цена соответсвует зеленой валюте.
                        </Typography>
                        <Button onClick={()=>toggler({type:'STAGE3_4'})}>
                            <b>Как интересно...есть еще?</b>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}

export default Stage3