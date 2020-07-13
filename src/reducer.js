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

        default: 
            return state;
    }
}