import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import beach_details from './beach_details'

const rootReducer = combineReducers({
    beach_details: beach_details,
    routing: routerReducer
})

export default rootReducer