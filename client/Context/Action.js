export const ADDTOLIST = (item) => ({
    type: 'ADD_TO_LIST',
    payload: item
})

export const UPDATEQUANTITY = (value) => ({
    type: 'UPDATE_QUANTITY',
    payload: value
})


export const REMOVEFROMLIST = (id) => ({
    type: 'REMOVE_FROM_LIST',
    payload: id
})