import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app';
import './css/normalize.css';
import './css/style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
		<h1 className="hidden">Нямушка - корм для кошек</h1>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
