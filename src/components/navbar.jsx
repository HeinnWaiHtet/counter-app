import React, { Component } from 'react';
class Navbar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    navbar
                    <span className="badge m-2 badge-primary" >{this.props.totalCount}</span>
                    <span className="badge m-2 badge-success" >{this.props.total}</span>
                </a>
            </nav>
        );
    }
}
 
export default Navbar;