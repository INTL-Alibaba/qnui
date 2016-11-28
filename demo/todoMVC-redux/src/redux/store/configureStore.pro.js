import {createStore} from 'redux';
import reducer from '../reducers/index.js'

export default function Store(initState){
  return createStore(reducer,initState,
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
}
