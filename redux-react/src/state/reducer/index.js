import { combineReducers } from 'redux';
import amountReducer from './amountReducer.js';

const reducers = combineReducers({
    amount: amountReducer
}) 

export default reducers;