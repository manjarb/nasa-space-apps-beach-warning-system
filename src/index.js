require('es6-promise').polyfill()

import React from 'react'
import { render } from 'react-dom'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import './css/style.css'

import App from './containers/App'
import Homepage from './containers/home/Homepage'
import BeachDetails from './containers/details/BeachDetails'

function handleUpdate() {
    let {
        action
    } = this.state.location;

    if (action === 'PUSH') {
        window.scrollTo(0, 0);
    }
}

const router = (
    <Provider store={ store }>
        <Router onUpdate={handleUpdate}
                history={ history }>
            <Route path="/" component={App}>
                <IndexRoute components={Homepage}/>
                <Route path="details/name/:name/date/:date/lat/:lat/lng/:lng" components={BeachDetails}/>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))