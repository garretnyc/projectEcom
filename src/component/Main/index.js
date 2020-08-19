import React, { Component} from "react"
import data from '../../data'
import ProductDetail from "../ProductDetail"
import PropTypes from 'prop-types'

const Main = ({addToCart} ) =>(
    <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="section-title">
                            <h4>New product</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <ul className="filter__controls">
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".women">Women’s</li>
                            <li data-filter=".men">Men’s</li>
                            <li data-filter=".kid">Kid’s</li>
                            <li data-filter=".accessories">Accessories</li>
                            <li data-filter=".cosmetic">Cosmetics</li>
                        </ul>
                    </div>
                </div>
                <div className="row property__gallery">
                    {
                        data.products.map(product =>
                            <ProductDetail product={product} clicked="false" 
                                           addToCart={e=> addToCart(e) } />
                        )
                    }
                
                   
                </div>
            </div>
        </section>

)

Main.propTypes ={
    addToCart: PropTypes.func.isRequired
}

export default Main
