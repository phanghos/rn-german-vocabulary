import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {vocabularyReducer} from '../reducers/vocabulary';
import rootSaga from './rootSaga';

const configureStore = () => {
  const rootReducer = combineReducers({
    vocabulary: vocabularyReducer,
  });
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
