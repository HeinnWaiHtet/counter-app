import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {

    state ={
        counters : [
            {id : 1, value : 2},
            {id : 2, value : 3},
            {id : 3, value : 5},
            {id : 4, value : 0},
            {id : 5, value : 8},
        ],
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters}) //this.setState({ counters : counters });
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    }

    render() { 
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick = {this.handleReset}>
                    Reset
                </button>
                {
                this.state.counters.map(counter =>
                     <Counter 
                        key={counter.id} 
                        counter = {counter}
                        onDelete = {this.handleDelete}
                        handleIncrement = {this.handleIncrement}
                     >
                     </Counter>
                     )
                     }
            </div>
            );
    }
}
 
export default Counters;