import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

class MoviesTable extends React.Component {

    columns = [
        {path : 'title', label : 'Title'},
        {path : 'genere.name', label : 'Genere'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'dailyRentalRate', label : 'Rate'},
        {key : 'like'},
        {key : 'delete'},
    ];

    render() { 
        const {movies, onLiked, onDelete, sortColumn, onSort} = this.props;
    return ( 
        <table className="table">
                <TableHeader 
                    columns = {this.columns}
                    sortColumn = {sortColumn}
                    onSort = {onSort} />
                <tbody>
                    {movies.map(m => (
                        <tr key={m._id}>
                            <td>{m.title}</td>
                            <td>{m.genere.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td><Like liked={m.liked} onClick={() => onLiked(m)} /></td>
                            <td>
                                <button 
                                onClick = {()=> onDelete(m)}
                                className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
     );
    }
}
 
export default MoviesTable;