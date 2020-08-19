import * as types from "../constants/ActionTypes"

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


const cartReducer = (state=initialState ,action)=> {
    switch (action.type){
        case types.DELET_PRODUCT:
            
            return {
                products: state.filter(product => product.id !== action.id),

                cartItems: state.cartItems - action.product.price
            }
        case types.VALIDATE_ORDER:
            return {
                ...state,
                cartItems: 0,
            }
                                
        default:
            return state

            
    }
}

export default cartReducer