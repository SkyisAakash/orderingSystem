import React from 'react';
import { connect } from 'react-redux';
import { requestOrders } from '../actions/order_actions';

class Paginate extends React.Component{

    // Returns list of links for page numbers
    pageLink(num) {
        let name;
        if(num === this.props.page)name='active';
        else name='';
        
        return (
            <li key={'page'+num} id={name}>
                <a onClick={() => this.props.fetchOrders(num)}>{num}</a>
            </li>
        )
    }

    links() {
        let result = []
        for (let i = 1; i <= this.props.total; i++) {
            result.push(this.pageLink(i))
        }
        return result;
    }

    changePage(factor) {
        if(factor==="add") {
            if(this.props.page+1<=this.props.total)this.props.fetchOrders(this.props.page+1)
        } else if(this.props.page>1)this.props.fetchOrders(this.props.page-1)
    }

    render() {
        return (
            <div className="paginationBlock">
                <ul className="pageList">
                    <li key='prev' id={1 === this.props.page ? 'Inactive' : ""}>
                        <a onClick={() => this.changePage("sub")}>Prev</a>
                    </li>
                    {this.links()}
                    <li key='add' id={this.props.total === this.props.page ? 'Inactive' : ""}>
                        <a onClick={() => this.changePage("add")}>Next</a>
                    </li>
                </ul>
            </div>
        )
    }
}

const msp = state => ({
    page: parseInt(state.pagination.page),
    total: state.pagination.total
})

const mdp = dispatch => ({
    fetchOrders: (page) => dispatch(requestOrders(page))
})

export default connect(msp, mdp)(Paginate);