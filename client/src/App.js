import React, { Fragment } from 'react';
import './App.css';


//components

import InputProducts from './components/InputProduct';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputProducts />
      </div>
    </Fragment>
  );
}

export default App;
