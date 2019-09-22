import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Firebase, {FirebaseContext} from './firebase'
import {Provider} from 'react-redux'
import App from './App';
import store from './redux/store'

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <Provider store={store}>
      <App/>
    </Provider>
  </FirebaseContext.Provider>
  , document.getElementById('root'));
