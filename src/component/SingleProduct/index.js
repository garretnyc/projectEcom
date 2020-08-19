import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

export default class SingleProduct extends Component{
    static propTypes ={
        product: PropTypes.object.isRequired,
        key: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired

    }

    render(){
        const {product, key, actions} =this.props
        return(
            <li> 
                <h3>Shopping Cart</h3>
                <div className="cart-name">
                    {product.name}

                </div>
                <div>
                    {product.price}
                </div>
            </li>
        )
    }
}