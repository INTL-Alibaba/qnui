import {combineReducers } from 'redux';
import todoMVCReducer from './todoMVC.js';

//combine所有reducer为一个根reducer
const rootReducer = combineReducers({
  todoMVCReducer
});

export default rootReducer;
