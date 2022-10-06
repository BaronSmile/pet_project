import React from 'react';
import img1 from '../../../public/assets/img/1.jpg'

const App:React.FC = () => {
    return (
        <div>
            <h2>Hello Мир</h2>
            <img src={img1} alt=""/>
        </div>
    );
};

export default App;
