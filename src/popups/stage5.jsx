import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from '../other';


function Stage5({ toggler }) {
    const classes = useStyles();
    return(
        <div>
            <Grid item xs={3} position='absolute' className={classes.stage5}>
                <Card>
                    <CardContent>
                        <Typography>
                            Последнее: поисковик. Сюда ты можешь
                            ввести нужные монетки, и тогда не придется
                            скроллить их все.<br />
                            Удачи!
                        </Typography>
                        <Button onClick={()=>toggler({type:'STAGE5_0'})}>
                            <b>Хипстер придумал Гугл?</b>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )
}

export default Stage5