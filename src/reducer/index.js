import { combineReducers } from 'redux'
import main from './main'
import cartReducer from './cartReducer'

export default combineReducers ({
    main,
    cartReducer
})