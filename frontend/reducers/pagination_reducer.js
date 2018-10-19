import { RECEIVE_PAGINATION } from "../actions/order_actions";
import merge from 'lodash/merge';


const PaginationReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PAGINATION:
            return merge({}, action.pagination)
        default:
            return state;
    }
}

export default PaginationReducer;