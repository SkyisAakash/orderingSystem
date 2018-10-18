import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';

class OrderIndexItem extends React.Component {
    render() {
        return(
            <div>
            <h1>This is orders</h1>
            <button onClick={() => this.props.openModal()}>Create</button>
            </div>
        )
    }
}

const msp = state => ({
    orders: Object.values(state.orders),
    errors: state.errors
})

const mdp = dispatch => ({
    openModal: () => dispatch(openModal())
})

export default connect(msp, mdp)(OrderIndexItem);