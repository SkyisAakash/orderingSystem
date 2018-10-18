import React from 'react';
import { createOrder } from '../actions/order_actions';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

class Modal extends React.Component {
    render() {
        if (!this.props.modal) return null;
        return (
            <div className="modal-back">
                <div className="modal" onClick={e => e.stopPropagation()}>
                    This is modal
                </div>
            </div>
        )
    }
}

const msp = (state) => ({
    errors: state.errors,
    modal: state.modal
})
const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(msp, mdp)(Modal);