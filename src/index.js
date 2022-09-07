import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameRouter from './components/GameRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store'
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GameRouter />
        <NavBar />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

/*
  <Provider store={store}>
      <BrowserRouter>
        <GameRouter />
        <NavBar />
      </BrowserRouter>
    </Provider>
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
