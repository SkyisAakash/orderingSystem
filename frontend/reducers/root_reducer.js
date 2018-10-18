import { combineReducers } from 'redux';
import OrderErrorReducer from './order_error_reducer';
import OrderReducer from './order_reducer';

export default combineReducers({
    orders: OrderReducer,
    errors: OrderErrorReducer
})