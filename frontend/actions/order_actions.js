import * as OrderUtil from '../util/order_api_util';
import { closeModal } from './modal_actions';
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS";
export const REMOVE_ORDER_ERRORS = "REMOVE_ORDER_ERRORS";


export const requestOrders = () => {
    return dispatch => {
        return OrderUtil.fetchOrders()
        .then(res => dispatch({type: RECEIVE_ORDERS, orders: res}));
    };
};

export const createOrder = order => dispatch => {
    OrderUtil.createOrder(order)
    .then((res)=>{
        dispatch({type:REMOVE_ORDER_ERRORS})
        dispatch(closeModal())
    }, err => {
        dispatch({type:RECEIVE_ORDER_ERRORS, errors: err.responseJSON})
    })
}

export const removeOrderErrors = () => dispatch => {
    return dispatch({type:REMOVE_ORDER_ERRORS})
}