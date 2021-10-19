import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Movies from "./components/movies";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
      { id: 5, value: 8 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters }); //this.setState({ counters : counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  constructor() {
    super();
  }

  // componentDidMount = () => console.log("CDM");

  // componentDidUpdate = () => console.log("FROM DID UPDATE");

  // componentWillUnmount = () => console.log("FROM WILL UNMOUNT");

  render() {
    return (
      <React.Fragment>
        <main class="container">
          <Movies />
        </main>
      </React.Fragment>
    );
    // return (
    //   <React.Fragment>
    //     <Navbar
    //       totalCount={
    //         this.state.counters.filter((counter) => counter.value > 0).length
    //       }
    //       total={this.state.counters
    //         .map((counter) => counter.value)
    //         .reduce((prev, curr) => prev + curr, 0)}
    //     />
    //     <main className="container">
    //       <Counters
    //         counters={this.state.counters}
    //         onDelete={this.handleDelete}
    //         onReset={this.handleReset}
    //         onIncrement={this.handleIncrement}
    //         onDecrement={this.handleDecrement}
    //       />
    //     </main>
    //   </React.Fragment>
    // );
  }
}

export default App;
