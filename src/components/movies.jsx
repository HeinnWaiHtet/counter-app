import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices'
import Like from './common/like';
class Movies extends React.Component {

    state = {
        movies : getMovies()
    };

    deleteMovie = movie =>{
        let mv = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : mv});
    }

    handleLiked = (movie) =>{
        const movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
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
                        <th>Title</th>
                        <th>Genere</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
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
                            <td><Like liked={m.liked} onClick={() => this.handleLiked(m)} /></td>
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