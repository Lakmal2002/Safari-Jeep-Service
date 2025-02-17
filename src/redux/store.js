import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux thunk';
import { carsReducer } from './reducers/carsReducer';
const composeEnhancers = composeWithDevTools({

});

const composeEnhancers = composeWithDevTools({carsReducer

});

const rootreducer = combineReducers({carsReducer

})

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware()
    
  )
);