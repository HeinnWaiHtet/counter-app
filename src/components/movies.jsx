import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices'
import Pagination from './common/pagination';
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
import { getGeneres } from '../services/fakeGenereServices';
import MoviesTable from './moviesTable';
import _ from 'lodash';
class Movies extends React.Component {

    //Program using data variables
    state = {
        movies : [],
        generes : [],
        pageSize : 5,
        currentPage : 1,
        selectedGenere : null,
        sortColumn : {path : 'title', order : 'asc'},
    };

    //Delete movies function
    handleDeleteMovie = movie =>{
        let mv = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : mv});
    }

    //Like Or favourite click function
    handleLiked = (movie) =>{
        const movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    //Pagination Function
    handlePageChanged = page => {
        this.setState({currentPage : page});
    }

    //SideBar Movies Kind Select Function
    handleGenereSelect = (genere) =>{
        this.setState({selectedGenere : genere, currentPage : 1 });
    }

    //componentDidMount Data Reterieve function
    componentDidMount = () =>{
        const generes = [{_id : "" ,name : "All"}, ...getGeneres()];
        this.setState({movies : getMovies(), generes });
    }

    //Sorting Function
    handleSorting = (sortColumn) =>{
        this.setState({sortColumn });
    }

    getPageData = () =>{
        const {pageSize , currentPage, movies : movieLists, selectedGenere, sortColumn} = this.state;
        const filteredMovies = selectedGenere && selectedGenere._id
            ? movieLists.filter(movie => movie.genere._id === selectedGenere._id)
            : movieLists; 
        const sortedList = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sortedList, currentPage, pageSize);
        return {totalCount : filteredMovies.length, data : movies};
    }

    render() { 
        const {length : count} = this.state.movies;
        const {pageSize , currentPage, sortColumn} = this.state;
        if(count === 0)
        return <p>There is no movies in the database.</p>

        const {totalCount, data:movies} = this.getPageData();

        return (
            <React.Fragment>
                <div className="row m-5">
                    <div className="col-3">
                        <ListGroup
                          items ={this.state.generes}
                          selectedGenere = {this.state.selectedGenere}
                          onItemSelect = {this.handleGenereSelect} />
                    </div>
                    <div className="col">
                    <p>There are {totalCount} movies in the database.</p>
                        <MoviesTable 
                           movies = {movies}
                           sortColumn = {sortColumn}
                           onLiked = { this.handleLiked }
                           onDelete = {this.handleDeleteMovie}
                           onSort = {this.handleSorting} />

                        <Pagination
                           itemsCount = {totalCount}
                           pageSize = {pageSize}
                           currentPage = {currentPage}
                           onPageChanged = {this.handlePageChanged} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;