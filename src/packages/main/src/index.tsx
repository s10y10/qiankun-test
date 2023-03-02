import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun';
import { CHILD_APP_CONFIG } from './consts';

const mircroApps: any = Object.values(CHILD_APP_CONFIG);
registerMicroApps(mircroApps);

start({
  sandbox: {
    //样式隔离特性
    experimentalStyleIsolation: true,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
