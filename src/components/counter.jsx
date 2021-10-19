import React, { Component } from 'react';
class Counter extends React.Component {
    
    render() {
        return (
        <div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button
                onClick={() => this.props.handleIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">+</button>
                <button
                onClick={() => this.props.handleDecrement(this.props.counter)}
                disabled = {this.props.counter.value === 0 ? "disabled" : ""}
                className="btn btn-secondary btn-sm m-2">-</button>
             <button 
                className="btn btn-danger btn-sm"
                onClick = {() => this.props.onDelete(this.props.counter.id)}>
                 X
             </button>
             </div>
        </div>
        );
    }

    formatCount(){
        const {value:count} = this.props.counter;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;