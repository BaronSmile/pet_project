import React from "react";
import {createRoot} from "react-dom/client";

import './main.scss';
import App from './components/app';

createRoot(document.getElementById('root')).render(<App/>);