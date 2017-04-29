import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <main className="">
                    {React.cloneElement(this.props.children, this.props)}
                </main>
            </div>
        )
    }
}