import React, { Component } from 'react';
import Header from '../components/shared/Header'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="">
                    {React.cloneElement(this.props.children, this.props)}
                </main>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}