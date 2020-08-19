import React from 'react'
import PropTypes from 'prop-types'
import SingleProduct from '../SingleProduct'


const Cart = ({ cartCount,products,actions }) => (
    <section>
        { 
         //!!cartCount &&
         <ul className='product-list'>
          {products.map(product =>
            <SingleProduct key={product.id} product ={product} {...actions}/>)}
        </ul>
        }       
    </section>
)

Cart.propTypes ={
    cartCount: PropTypes.number.isRequired,
    products: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired

}

export default Cart