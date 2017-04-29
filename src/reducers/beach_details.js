import { UPDATE_BEACH_DETAILS } from '../actions/types'

function beach_details(state = {}, action) {
    switch(action.type) {
        case UPDATE_BEACH_DETAILS :
            return action.beach_details;
        default:
            return state;
    }
}

export default beach_details;