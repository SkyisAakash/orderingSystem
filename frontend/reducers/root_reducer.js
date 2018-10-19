import { combineReducers } from 'redux';
import OrderErrorReducer from './order_error_reducer';
import OrderReducer from './order_reducer';
import ModalReducer from './modal_reducer';
import PaginationReducer from './pagination_reducer';

export default combineReducers({
    orders: OrderReducer,
    errors: OrderErrorReducer,
    modal: ModalReducer,
    pagination: PaginationReducer
})