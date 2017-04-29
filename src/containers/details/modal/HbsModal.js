import React from 'react'

const HbsModal = () => {

    return (
        <div className="modal">
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button className="delete"/>
                </header>
                <section className="modal-card-body">
                    content
                </section>
                <footer className="modal-card-foot">
                    <a className="button is-success">Save changes</a>
                    <a className="button">Cancel</a>
                </footer>
            </div>
        </div>
    )
}