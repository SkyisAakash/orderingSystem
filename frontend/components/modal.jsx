import React from 'react';
import { createOrder } from '../actions/order_actions';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            coffee:"Bella Donovan",
            method:"",
            number_of_cases:"",
            packets_per_case:50,
            notes:"",
            priority: false,
            ship_date:""
        }
        this.select = this.select.bind(this)
        this.showErrors = this.showErrors.bind(this)
        this.coffee = ["Bella Donovan", "Giant Steps"]
        this.packets_per_case = [50, 25]
        this.method = ["Aeropress", "Coffee Maker", "Cold Brew", "French Press", "Pour Over"]
    }

    select(e, category) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            [category]: e.currentTarget.value
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    processForm(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.createOrder(this.state)
        .then(() => {
            if(this.props.errors.length===0)this.props.closeModal();
        })
    }

    showErrors() {
        return (
            <ul>
                {this.props.errors.map(error => {
                    return <li><span className="star">{error}</span></li>
                })}
            </ul>
        )   
    }

    render() {
        if (!this.props.modal) return null;
        const checkBox = (this.state.priority === true) ? "checked" : "";
        return (
            <div className="modal-back">
                <div className="modal" onClick={e => e.stopPropagation()}>
                    <p className="closeButton" onClick={() => this.props.closeModal()}>&times;</p>
                    <h1>Perfectly Ground Work Orders</h1>
                    <p className="gray">Please fill in the data in the form below. Fields indicated with <span className="star">*</span> are mandatory</p>
                    {this.showErrors()}
                    <form className="orderform" onSubmit={(e) => this.processForm(e)}>
                        <div className="firstRow">
                            <div className="firstCol">
                                <div className="coffeediv">
                                    <label>Coffee<span className="star">*</span></label>
                                    <label className="dropSelect">
                                        <select onChange={(e)=>this.select(e, 'coffee')}>
                                            {this.coffee.map(caf => {
                                                return <option value={caf}>{caf}</option>
                                            })}
                                        </select>
                                    </label>
                                </div>
                                <div className="datediv">
                                    <label>Ship Date<span className="star">*</span></label>
                                    <label className="dropSelect">
                                    <input type="date" onChange={(e)=>this.select(e, 'ship_date')}/>
                                    </label>
                                </div>  
                            </div>
                            <div className="secondCol">
                                <div className="methoddiv">
                                    <label>Brew Method<span className="star">*</span></label>
                                    <label className="dropSelect">
                                        <select onChange={(e) => this.select(e, 'method')}>
                                            <option value="" selected disabled hidden>Choose One</option>
                                            {this.method.map(met => {
                                                return <option value={met}>{met}</option>
                                            })}
                                        </select>
                                    </label>
                                </div>
                                <div className="numbersdiv">
                                    <div className="casediv">
                                        <label>Number of Cases<span className="star">*</span></label>
                                        <label className="dropSelect">
                                            <select onChange={(e) => this.select(e, 'number_of_cases')}>
                                                <option value="" selected disabled hidden>#</option>
                                                {[...Array(100).keys()].map(num => {
                                                    return <option value={num}>{num}</option>
                                                })}
                                            </select>
                                        </label>
                                    </div>
                                    <div className="packetsdiv">
                                        <label>Packets per Case<span className="star">*</span></label>
                                        <label className="dropSelect">
                                            <select onChange={(e) => this.select(e, 'packets_per_case')}>
                                                {this.packets_per_case.map(pac => {
                                                    return <option value={pac}>{pac}</option>
                                                })}
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secondRow">
                            <label>Notes</label>
                            <input className="dropdownField" type="text" onChange={this.update('notes')} value={this.state.notes} />
                        </div>
                        <div className="thirdRow">
                            <input type="checkbox" checkBox onClick={() => this.setState({priority: !checkBox})}/> <label>Priority</label>
                        </div>

                        <input type="submit" className="submitButton" value="SUBMIT WORK ORDER"/>
                    </form>
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