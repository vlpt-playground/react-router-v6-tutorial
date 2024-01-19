import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BottomNav from "./BottomNav";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomNav />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
