import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movie extends Component {
    state = { 
        movies: getMovies(),
    }
    
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies });
        console.log(movie)
    }
    render() { 

        const { length:count } = this.state.movies;
        if (count === 0)
            return "There are no movies";
        
        return (
            <React.Fragment>
                <p>Showing {count} movies </p>
            <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Number In Stock</th>
                    <th>Daily Rental Rate</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{ movie.title }</td>
                        <td>{ movie.genre.name }</td>
                        <td>{ movie.numberInStock }</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={ () => this.handleDelete(movie) } className="btn btn-danger btn-sm">Delete</button></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
            </React.Fragment>
        );
    }
}
 
export default Movie;