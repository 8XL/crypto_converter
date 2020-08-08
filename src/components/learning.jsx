import React from 'react';

import { Button } from '@material-ui/core';
import { Stages } from '../popups';
import { stage1Contents, stage2Contents, stage3Contents, stage4Contents, stage5Contents } from '../popups/learningContent';

function Learning ({state, dispatch}) {
    const [stage, setStage] = React.useState({
        st1: false,
        st2: false,
        st3: false,
        st4: false,
        st5: false,
    });

    const handleClick = () =>{
        setStage(stage=>({
            ...stage,
            st1: true
        }))
        dispatch({
            type: 'RESET_LEARNING'
        })
        state.refs.ref1.style.transition = '1s';
        state.refs.ref1.style.transform = 'rotate(360deg)';
    }
    
    const toggler = (action) =>{
        switch (action.type) {
            case 'STAGE1_2': 
                setStage(stage=>({
                    ...stage,
                    st1: false,
                    st2: true,
                })); 
                state.refs.ref1.click();
            break;
            case 'STAGE2_3': 
                setStage(stage=>({
                    ...stage,
                    st2: false,
                    st3: true,
                })); 
                dispatch({
                    type: 'FORM1',
                    payload: {
                        form1: 5 ,
                        form3: 5 * state.coin1st.price,
                    }
                })
            break;
            case 'STAGE3_4': 
                setStage(stage=>({
                    ...stage,
                    st3: false,
                    st4: true,
                })); 
                state.refs.ref2.style.transition = '1s';
                state.refs.ref2.style.transform = 'rotate(360deg)';
                state.refs.ref2.click();
            break;
            case 'STAGE4_5': 
                setStage(stage=>({
                    ...stage,
                    st4: false,
                    st5: true,
                })); 
                dispatch({
                    type: 'SEARCH_VALUE',
                    payload: 'DOGE'
                })
            break;
            case 'STAGE5_0': 
                setStage(stage=>({
                    ...stage,
                    st5: false,
                }));
                dispatch({
                    type: 'RESET_LEARNING',
                }) 
            break;
        default: 
            setStage(stage=>({
                st1: false,
                st2: false,
                st3: false,
                st4: false,
                st5: false,
            }))
        }
    };

    const {st1, st2, st3, st4, st5} = stage;
    return(
        <div className='learning'>
            <Button 
                disabled = {st1||st2||st3||st4||st5}
                onClick={handleClick}>
                <u>WikiHow</u>
            </Button>  
            {
                st1
                    ? <Stages content={stage1Contents} toggler={toggler} />
                :st2
                    ? <Stages content={stage2Contents} toggler={toggler} />
                :st3
                    ? <Stages content={stage3Contents} toggler={toggler} />
                :st4
                    ? <Stages content={stage4Contents} toggler={toggler} />
                :st5
                    ? <Stages content={stage5Contents} toggler={toggler} />
                : ''
            }
        </div>
    )
}

export default Learning