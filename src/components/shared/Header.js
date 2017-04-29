import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav className="nav">
                        <div className="nav-left">
                            <Link to="/"
                                  className="nav-item">
                                <strong>Beach Warning</strong>
                            </Link>
                        </div>
                        <div className="nav-right nav-menu">
                            <Link to="/"
                                  className="nav-item">
                                Home
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}