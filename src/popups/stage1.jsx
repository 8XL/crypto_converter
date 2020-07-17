import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from '../other';

function Stage1({toggler}) {
    const classes = useStyles();
    return(
        <div>
        <Grid item xs={3} position='absolute' className={classes.stage1}>
            <Card>
                <CardContent>
                    <Typography>
                        Привяо! <br /> Значица смотри: это карточка с монеткой.<br />
                        Тут у нас полное и краткое наименование монетки,<br />
                        а так жe её актуальная цена и процент изменения <br />
                        от начала торгов.
                    </Typography>
                    <Button onClick={()=>toggler({type:'STAGE1_2'})}>
                        <b>Да-да, го некст</b>
                    </Button>
                </CardContent>
            </Card>
        </Grid>
        </div>

    )
}



export default Stage1