import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function ModalReducer(state = null, action) {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return true
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}