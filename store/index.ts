import { combineReducers, createStore } from 'redux';
import notificationReducer from './reducers/notification';
import productReducer from './reducers/product';

const initialState = {};

const rootReducer = combineReducers({
    product : productReducer,
    notification : notificationReducer
})

const store = createStore(rootReducer);

export default store;
