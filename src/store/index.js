import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as filmsReducer } from './reducer/reducer.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const rootReducer = combineReducers({
  films: filmsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
