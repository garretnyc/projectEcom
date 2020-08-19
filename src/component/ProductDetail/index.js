import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ProductDetail extends Component {
    static propTypes = {
        clicked: PropTypes.bool.isRequired,
        product: PropTypes.object.isRequired,
        addToCart: PropTypes.func.isRequired
    
    }

    handleClick (e) {
        this.props.addToCart(e)

    }

    render(){

        const {product, clicked} = this.props;   

        return ( <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mix women" >
        <div className="product__item">
            <div className="product__item__pic set-bg"  style={{backgroundImage:`url(${product.img})` } }>
                
                <div className="label new">New</div>
                <ul className="product__hover">
                    <li><a href="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                    <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                    <li><a href="#"><span className="icon_bag_alt" onClick={(product) => this.handleClick(product)} ></span></a></li>
                </ul>
            </div>
            <div className="product__item__text">
                <h6><a href="#">{ product.name}</a></h6>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="product__price">$ {product.price}</div>
            </div>
        </div>
    </div> 

        )
    }


}
