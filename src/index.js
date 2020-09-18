import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchApi from './FetchApi'
import * as serviceWorker from './serviceWorker';
import MainComp from './components/MainComp'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FetchApi/> */}
    <MainComp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
