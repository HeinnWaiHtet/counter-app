import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Table from './common/table';

class MoviesTable extends React.Component {

    columns = [
        {path : 'title', label : 'Title'},
        {path : 'genere.name', label : 'Genere'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'dailyRentalRate', label : 'Rate'},
        {key : 'like', content : m => (<Like liked={m.liked} onClick={() => this.props.onLiked(m)} />)},
        {key : 'delete',
         content : m => (<button onClick = {()=> this.props.onDelete(m)}
         className="btn btn-danger btn-sm">Delete</button>)},
    ];

    render() { 
        const {movies, sortColumn, onSort} = this.props;
    return ( 
        // <table className="table">
        //         <TableHeader 
        //             columns = {this.columns}
        //             sortColumn = {sortColumn}
        //             onSort = {onSort} />
        //         <TableBody
        //             columns = {this.columns}
        //             data = {movies} />
        // </table>
        <Table
           columns = {this.columns}
           data ={movies}
           sortColumn = {sortColumn}
           onSort = {onSort} />
     );
    }
}
 
export default MoviesTable;