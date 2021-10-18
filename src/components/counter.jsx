import { getByPlaceholderText } from '@testing-library/dom';
import React, { Component } from 'react';
class Counter extends React.Component {
    state ={
        count : 0,
        tags  : ["tag1","tag2","tag3"]
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        console.log(product);
        this.setState({count : this.state.count +1})
    }

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
             onClick={() => this.handleIncrement({id : 1})}
             className="btn btn-secondary btn-sm">Increment</button>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </div>);
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;