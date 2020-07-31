export default (state, action) => {
    switch (action.type) {
        case 'DATA_COINS':
            return {
                ...state,
                coins: [...state.coins, action.payload],
            };

        case 'SET_CALC_1':
            return {
                ...state,
                coin1st: {
                    name: action.payload.name,
                    price: action.payload.price,
                },
                clicked: false,
            };
        case 'SET_CALC_2':
            return {
                ...state,
                coin2nd: {
                    name: action.payload.name,
                    price: action.payload.price,
                },
                clicked: true,
            };
        case 'SEARCH_VALUE':
            return {
                ...state,
                search: action.payload
            };
        case 'FORM1':
            return {
                ...state,
                form:{
                    form1:action.payload.form1,
                    form3:action.payload.form3,
                }
            };
        case 'FORM2':
            return {
                ...state,
                form:{
                    form2:action.payload.form2,
                    form3:action.payload.form3,
                }
            };
        case 'FORM3':
            return {
                ...state,
                form:{
                    form1:action.payload.form1,
                    form2:action.payload.form2,
                    form3:action.payload.form3,
                }
            };
        case 'REF1':
            return {
                ...state,
                refs:{
                    ...state.refs,
                    ref1: action.payload,
                }
            };
        case 'REF2':
            return {
                ...state,
                refs:{
                    ...state.refs,
                    ref2: action.payload,
                }
            };
        case 'RESET_LEARNING':
            return {
                ...state,
                coin1st: {
                    name: '',
                    price: '',
                },
                coin2nd: {
                    name: '',
                    price: '',
                },
                clicked: true,
                search: '',
                form: {
                    form1:'',
                    form2:'',
                    form3:'',
                },
            };
    default: 
        return state;
    }
}