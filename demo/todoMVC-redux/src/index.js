// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/TodoMVC.js';
import {Provider} from 'react-redux';
import 'styles/App.scss';
import configureStore from './redux/store/configureStore.dev.js';
import DevTools from './redux/Devtools.js'
const store = configureStore()
// redux调试工具，生产环境请删除
// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>,
  document.getElementById('app'));
