import React from 'react';
import pic1 from '../assets/images/react.png'
import '../main.scss'

const App = () => {
  return (
    <div>
      Hello Webpack!!!
      <img src={pic1} alt="pic1"/>
      <div className="pic"></div>
    </div>
  );
};

export default App;
