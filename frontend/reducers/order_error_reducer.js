import { RECEIVE_ORDER_ERRORS } from "../actions/order_actions";


const OrderErrorReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ORDER_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default OrderErrorReducer;