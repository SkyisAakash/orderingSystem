import { RECEIVE_ORDERS } from "../actions/order_actions";
import merge from 'lodash/merge';

const OrderReducer = (state={}, action ) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ORDERS: 
            return merge({}, action.orders)
        default:
            return state;
    }
}

export default OrderReducer;