import * as types from '../constants/ActionTypes'


const initialState = {
    products: [
        {
            name:'Buttons tweed blazer',
            price:59.0,
            id:0
        }
    ],
    cartItems: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case types.ADD_TO_CART:
            return {
                ...state,
                products: action.product,
                cartItems: state.cartItems+action.product.price
                
            }
        default:
            return state

    }

}

export default mainReducer