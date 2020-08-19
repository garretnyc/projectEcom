import React from 'react';
import './App.css';
import './css/elegant-icons.css'
import './css/bootstrap.min.css'
import Cart from "./container/Cart"
import Header from "./component/Header"
import Main from "./component/Main"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Route path='/' component={Main}></Route>
      <Route path='/cart' component={Cart}></Route>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
