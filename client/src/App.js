import React, { Fragment } from 'react';
import './App.css';


//components

import InputProducts from './components/InputProduct';
import ListProducts from './components/Listproducts';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputProducts />
        <ListProducts />
      </div>
    </Fragment>
  );
}

export default App;
