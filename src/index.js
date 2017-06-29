import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import App from './components/App'
import rootReducer from './reducers'
import {addCharacterById} from './actions'

const store = createStore(rootReducer)
//If you want to see if the store is being received properly, simplty console.log(store.getState())
console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store', store.getState()))
// dispatch essentially means call this function for me
store.dispatch(addCharacterById(2))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
