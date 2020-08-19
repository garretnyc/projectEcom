import React, {Component }from "react"
import logo from '../../assets/img/icons-logo.png'
import { Link } from "react-router-dom"


const Header = () =>(
    
            <div>
                <header className="header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-3 col-lg-5">
                                    <div className="header__logo">
                                        <Link to='/'> <img src={logo}></img></Link>                                        
                                   </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <nav className="header__menu">
                                        <ul>
                                            <li className="active"><a href="./index.html">Home</a></li>
                                            <li><Link to='/'>Women’s</Link></li>
                                            <li><Link to='/'>Men’s</Link></li>
                                            <li><Link to='/'>Shop</Link></li>
                                            <li><Link to='/'>Pages</Link>
                                                <ul className="dropdown">
                                                    <li><a href="./product-details.html">Product Details</a></li>
                                                    <li><a href="./shop-cart.html">Shop Cart</a></li>
                                                    <li><a href="./checkout.html">Checkout</a></li>
                                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="./blog.html">Blog</a></li>
                                            <li><a href="./contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="coclassName-classNameg-3  col-lg-2">
                                    <div className="header__right">
                                        <div className="header__right__auth">
                                            <a href="#">Login</a>
                                            <a href="#">Register</a>
                                        </div>
                                        <ul className="header__right__widget">
                                            <li><span className="icon_search search-switch"></span></li>
                                          
                                            <li><Link to='/cart'><span className="icon_bag_alt"></span>
                                            <div className="tip">2</div></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="canvas__open">
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </header>
                </div>
      
)


export default Header

    