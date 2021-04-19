import React, { Component } from 'react';
import Like from './common/like'
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';


class MoviesTable extends Component {

    columns = [
        { path: 'title', lable: 'Title' },
        { path: 'genre.name', lable: 'Genre' },
        { path: 'numberInStock', lable: 'Stock' },
        { path: 'daolyRentalRate', lable: 'Rate' },
        {column: 'key'},
        {column: 'key'},
        
    ];

    render() { 
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

        return (
            <table className="table table-hover table-dark">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody columns={this.columns} data={movies} />
                
                {/* <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{ movie.title }</td>
                            <td>{ movie.genre.name }</td>
                            <td>{ movie.numberInStock }</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td> <Like liked={movie.liked} onClick ={ () => onLike(movie)} /></td>
                            <td><button onClick={ () => onDelete(movie) } className="btn btn-danger btn-sm">Delete</button></td>
                            
                        </tr>
                    ))}
                </tbody> */}
            </table>
     );
    };
};
 
export default MoviesTable;
