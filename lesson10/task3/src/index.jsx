import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TemperatureInput from './TemperatureInput.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<TemperatureInput />, rootElement);
