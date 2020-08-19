import { createStore} from 'redux'
import rootReducer from '../reducer/index.js';

/*const initialState = {
  products: [
      {
          name:'Buttons tweed blazer',
          price:59.0,
          id:0
      }
  ],
  cartItems: 0
}*/

export default createStore(rootReducer)
