import * as OrderUtil from '../util/order_api_util';
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS";

export const requestOrders = () => {
    return dispatch => {
        return OrderUtil.fetchOrders()
        .then(res => dispatch({type: RECEIVE_ORDERS, orders: res}));
    };
};

export const createOrder = order => dispatch => {
    OrderUtil.createOrder(order)
    .catch(errors => {
        return dispatch({type: RECEIVE_ORDER_ERRORS, errors})
    })
}