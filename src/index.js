import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import StateProvider from './Components/StateProvider';
import { initialState, reducer } from './reducer';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
);
