import * as types from '../constants/ActionTypes'

export const addToCart = ( product ) => ({
    type: types.ADD_TO_CART,
    product
})

export const deletProduct = ( id ) =>({
    type: types.DELET_PRODUCT,
    id
})

export const validateOrder = () =>({
    type: types.VALIDATE_ORDER
})