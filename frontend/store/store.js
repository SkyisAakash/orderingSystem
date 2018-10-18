import { CreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
export default CreateStore(RootReducer, applyMiddleware(thunk));