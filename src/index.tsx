import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { song} from './store/reducer/song'
import reportWebVitals from './reportWebVitals';
import { combineReducers, compose, createStore, legacy_createStore } from 'redux';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const store = createStore(
  combineReducers({song})
);

export default store;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
