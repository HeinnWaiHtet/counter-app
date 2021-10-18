import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices'
class Movies extends React.Component {

    state = {
        movies : getMovies()
    };

    deleteMovie = movie =>{
        let mv = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : mv});
    }

    render() { 
        const {length : count} = this.state.movies;
        if(count === 0)
        return <p>There is no movies in the database.</p>


        return (
            <React.Fragment>
                <p>There are {count} movies in the database.</p>
                <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genere</td>
                        <td>Stock</td>
                        <td>Rate</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(m => (
                        <tr key={m._id}>
                            <td>{m.title}</td>
                            <td>{m.genere.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td>
                                <button 
                                onClick = {()=> this.deleteMovie(m)}
                                className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;