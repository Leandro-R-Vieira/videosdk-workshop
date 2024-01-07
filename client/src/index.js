import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ClientContext} from './Context/globalContext';
import ZoomVideo from '@zoom/videosdk';

const client = ZoomVideo.createClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClientContext.Provider value = {client}>
  <React.StrictMode>
     
        <App/>
        
  </React.StrictMode>
  </ClientContext.Provider>
);
