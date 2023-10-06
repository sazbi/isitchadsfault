import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import NoU from './NoU';
import Incident from './Incidents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/nou' Component={NoU} />
        <Route path='/incidents' Component={Incident} />
      </Routes>
    </Router>
  </React.StrictMode>
);
