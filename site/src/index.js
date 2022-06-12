import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/home';
import Login from './pages/login';
import History from './pages/history';
import Admin from './pages/admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/history' element={<History />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
