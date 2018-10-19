import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import { removeOrderErrors } from '../actions/order_actions';

class OrderIndexItem extends React.Component {
    render() {
        return(
            <div>
            <h1>This is orders</h1>
            <button onClick={() => {this.props.removeErrors(); this.props.openModal();}}>Create</button>
            </div>
        )
    }
}

const msp = state => ({
    orders: Object.values(state.orders),
    errors: state.errors
})

const mdp = dispatch => ({
    openModal: () => dispatch(openModal()),
    removeErrors: () => dispatch(removeOrderErrors())
})

export default connect(msp, mdp)(OrderIndexItem);