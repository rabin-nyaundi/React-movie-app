import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination'
import ListGroup from './common/listGroup'
import { paginate }  from '../utils/paginate'
import { getGenres} from '../services/fakeGenreService'
import MoviesTable from './MoviesTable';
import _ from 'lodash'
class Movie extends Component {
    state = { 
        movies: [],
        genres:[],
        currentPage : 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' },
    }
    componentDidMount() {
        const genres =  [{_id: "", name: "All genres"}, ...getGenres()]
        this.setState({movies: getMovies(), genres })
    };
    
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies });
        console.log(movie)
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    };
    handlePageChange = page => {
        this.setState({ currentPage: page})
        // console.log(page)
    };
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
        console.log(genre);
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
        console.log(sortColumn);
    };

    render() { 

        const { length:count } = this.state.movies;
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            movies: allMovies
        } = this.state;
        if (count === 0)
            return "There are no movies";
        
        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize)
        
        return (
            <div className ="row">
                <div className="col-md-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem = {this.state.selectedGenre}
                        // textProperty='name'
                        // valueProperty = '_id'
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col-md-8">
                <p>Showing {filtered.length} movies </p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort = {this.handleSort}
                    />
                    <Pagination 
                        itemsCount = {filtered.length} 
                        pageSize={pageSize} 
                        onPageChange ={this.handlePageChange} 
                        currentPage = {currentPage}
                    />
                </div>
            </div>
        );
    }
}
 
export default Movie;