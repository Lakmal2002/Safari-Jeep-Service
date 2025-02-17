import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'thunk';
const composeEnhancers = composeWithDevTools({ 
  
});

const rootReducer = combineReducers({
  
});
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  
  ),
);