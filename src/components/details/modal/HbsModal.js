import React from 'react'

const HbsModal = ({closeModal,content,title}) => {

    return (
        <div className="modal is-active">
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button onClick={closeModal}
                            className="delete"/>
                </header>
                <section className="modal-card-body">
                    {content}
                </section>
                {/*<footer className="modal-card-foot">*/}
                    {/*<a className="button is-success">Save changes</a>*/}
                    {/*<a className="button">Cancel</a>*/}
                {/*</footer>*/}
            </div>
        </div>
    )
}

export default HbsModal