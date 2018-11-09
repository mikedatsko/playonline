import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import { CommonReducer } from './reducers';

const rootReducer = combineReducers({
  common: CommonReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, apiMiddleware)));
