import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app')
//   <HashRouter basename="/home">
//   <App />
// </HashRouter>, document.getElementById('app')
);