import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';
import SearchBar from './components/layout/SearchBar'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        
      </Fragment>
      </Provider>

  );
};

export default App;
