import React from 'react';
import { Route } from 'react-router-dom';
import OrderIndexContainer from './order_index_container';
const App = () => (

    <div>
        <Route path="/" component={OrderIndexContainer}/>
    </div>
)

export default App;