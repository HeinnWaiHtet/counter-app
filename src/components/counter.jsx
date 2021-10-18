import React, { Component } from 'react';
class Counter extends React.Component {
    render() { 
        return (
        <div>
            <h3>The Counter For #{this.props.counter.id}</h3>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.props.handleIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">Increment</button>
             <button 
                className="btn btn-danger btn-sm m-2"
                onClick = {() => this.props.onDelete(this.props.counter.id)}>
                 Delete
             </button>
        </div>);
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