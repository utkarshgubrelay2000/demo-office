import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil'
import { recoilPersist } from 'recoil-persist'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

