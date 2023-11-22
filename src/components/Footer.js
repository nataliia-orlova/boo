import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark py-5 text-center text-white position-relative">
                <div className="container">
                    <small>
                        Copyright &copy;{' '}
                        <span className="text-warning">PARROT</span> BOOKS
                    </small>
                    <a href="" className="position-absolute bottom-0 end-0 p-5">
                        <i className="bi bi-arrow-up-circle h1 text-warning"></i>
                    </a>
                </div>
            </footer>
        );
    }
}
