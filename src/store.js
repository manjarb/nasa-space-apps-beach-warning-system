import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const defaultState = {
    beach_details: null,
}

const store = createStore(rootReducer, defaultState,applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;