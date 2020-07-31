import React from 'react';

import { Button } from '@material-ui/core';

import { Stage1, Stage2, Stage3, Stage4, Stage5 } from '../popups';

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
                    ? <Stage1 toggler={toggler} />
                :st2
                    ? <Stage2 toggler={toggler} />
                :st3
                    ? <Stage3 toggler={toggler} />
                :st4
                    ? <Stage4 toggler={toggler} />
                :st5
                    ? <Stage5 toggler={toggler} />
                : ''
            }
        </div>
    )
}

export default Learning