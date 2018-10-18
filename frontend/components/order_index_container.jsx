import React from 'react';
import { connect } from 'react-redux';

class OrderIndexItem extends React.Component {
    render() {
        return(
            <h1>This is orders</h1>
        )
    }
}

const msp = state => ({
    orders: Object.values(state.orders),
    errors: state.errors
})

const mdp = dispatch => ({})

export default connect(msp, mdp)(OrderIndexItem);