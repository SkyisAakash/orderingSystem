import React from 'react';
import { Route } from 'react-router-dom';
import OrderIndexContainer from './order_index_container';
import Modal from './modal';
const App = () => (
    <div>
        <Modal/>
        <OrderIndexContainer />
    </div>
)

export default App;