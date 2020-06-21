import React from 'react';
import './App.css';
import Bugs from './components/bugs';
import configureStore from './store/configureStore';
// import StoreContext from './contexts/storeContext';
import {Provider} from 'react-redux';
import BugList from './components/bugsList';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      {/* <Bugs/> */}
      <BugList/>
    </Provider>
    // <StoreContext.Provider value={store}>
    //   <Bugs/>
    // </StoreContext.Provider>
  );
}

export default App;
