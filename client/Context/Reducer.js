const Reducer =  (state, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return {
                ...state,
                loading: false,
                list: [ action.payload , ...state.list],
                error: false,
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                loading: false,
                list: action.payload,
                error: false,
            };
        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                loading: false,
                list: state.list.filter((item) => item.id !== action.payload),
                error: false,
            };
        default: 
            return state;
    }
}

export default Reducer;