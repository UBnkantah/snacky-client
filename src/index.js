import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/Store';
import { productsFetch } from './contents/ProductsSlice';
import { getTotals } from './contents/CartSlice';
import { loaduser } from './contents/UserSlice';


store.dispatch(productsFetch())
store.dispatch(getTotals())
store.dispatch(loaduser())




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

