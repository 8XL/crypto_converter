import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from '../other';


function Stages({ content, toggler }) {
    const classes = useStyles();
    return(
        <div>
        <Grid item xs={3} className={classes[content.style]}>
            <Card>
                <CardContent>
                    <Typography>
                        {content.textContent}
                    </Typography>
                    <Button onClick={()=>toggler({type:`${content.case}`})}>
                        <b>{content.buttonContent}</b>
                    </Button>
                </CardContent>
            </Card>
        </Grid>
        </div>

    )
}



export default Stages