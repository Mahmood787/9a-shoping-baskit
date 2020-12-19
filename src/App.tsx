import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import {Basket} from './components/Basket'
import Header from './Header';
function App() {
  return (
    <div className="App">
        <Header/>
        <Products/>
        <Basket/>
    </div>
  );
}

export default App;
