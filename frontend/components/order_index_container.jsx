import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import { removeOrderErrors, requestOrders } from '../actions/order_actions';
import Pagination from './paginate';

class OrderIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
    }

    componentDidMount() {
        this.props.getOrders(1)
    }

    findId(id) {
        let number = id.toString();
        let result = ""
        for (let i = 0; i < 5-number.length; i++) {
            result += "0"
        }
        result += number
        result = "#"+result
        return result;
    }

    printStar(order) {
        if (order.priority === true) return <img className="smallImage" src="https://i.postimg.cc/T31qhC41/star.png"/>
        else return null;
    }

    render() {
        let date = new Date();
        let day = date.getDate();
        let shortmonth = date.toLocaleString('en-us', { month: "short" }).toUpperCase();
        return(
            <div className="mainbody">
                <div className="firstdiv">
                    <img src="https://i.postimg.cc/GpLh3yfL/Screen-Shot-2018-10-18-at-11-10-06-PM.png"/>
                    <p className="heading">BLUE BOTTLE COFFEE</p>
                </div>
                <div className="seconddiv">
                    <div className="dateBlock">
                        <p className="month">{shortmonth}</p>
                        <p className="day">{day}</p>
                    </div>
                    <h1 className="indexTitle" id="indexHeading"> Perfectly Ground Work Orders </h1>
                    <button className="submitButton" id="orderButton" onClick={() => {this.props.removeErrors(); this.props.openModal();}}>CREATE ORDER</button>
                </div>
                <div className="indexBox">
                    <p className="tableHeading">ORDERS</p>
                    <table className="table">
                        <tr>
                            <th>Coffee</th>
                            <th>Method</th>
                            <th>Number of Cases</th>
                            <th>Packets per Case</th>
                            <th>Ship Date<img className="smallImage" src="https://i.postimg.cc/Dyy1YxF6/Screen-Shot-2018-10-19-at-12-35-12-AM.png"/></th>
                            <th>Order</th>
                            <th>View</th>
                        </tr>
                        {this.props.orders.map(order => {
                            return <tr>
                                    <td>{order.coffee}</td>
                                    <td>{order.method}</td>
                                    <td>{order.number_of_cases}</td>
                                    <td>{order.packets_per_case}</td>
                                    <td>{order.ship_date} {this.printStar(order)}</td>
                                    <td className="orderId">{this.findId(order.id)}</td>
                                <td><img className="viewButton" src="https://i.postimg.cc/6qxYvnGS/view-Button.png"/></td>
                                </tr>
                        })}
                    </table>
                </div>
                <Pagination />
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
    removeErrors: () => dispatch(removeOrderErrors()),
    getOrders: (page) => dispatch(requestOrders(page))
})

export default connect(msp, mdp)(OrderIndexItem);