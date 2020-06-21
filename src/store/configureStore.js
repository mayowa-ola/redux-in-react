// USING REDUX MANUALLY
// import {createStore} from 'redux';
// import {devToolsEnhancer} from 'redux-devtools-extension'
// import reducer from './bugs';


// export default function configureStore(){
//     const store = createStore(reducer, devToolsEnhancer({trace:true}));
//     return store
// };

//USiNG REDUX TOOL KIT

import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
// import reducer from './bugs';
import reducer from './combineReducer';
import logger from './middleware/logger';
import func from './middleware/func';
import toast from './middleware/toast';
import api from './middleware/api';

export default function() {
   return configureStore({
      reducer,
      middleware: [
         ...getDefaultMiddleware(),
         logger("console"), api,toast, func,]
   });
}
