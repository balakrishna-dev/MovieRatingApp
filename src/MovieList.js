import React, { Component } from 'react';
import movies from './MovieData'
import MovieCard from './MovieCard';
import { connect } from 'react-redux';
import updateRating from './Redux/updateRating'
import updateRatingReducer from './Redux/updateRatingReducer';

export class MovieList extends Component {
    constructor(props){
        super(props);
        this.state={
            rating : 0,
            selectedMovie : "Avatar"
        }
    }
    componentDidMount(){
       
    }
    render() {
        console.log(this.state,this.props)
        console.log(movies)
         if(this.state.selectedMovie) {
                        movies.forEach(movie => {
                            if(this.state.selectedMovie.toLowerCase() == movie.name.toLowerCase()) movie.rating = this.state.rating
                        })}
                        movies.sort((a,b )=> (a.rating < b.rating) ? 1 : -1
                        );
                
        return (
            <div>
                <h4>Please Rate the movie</h4>
                <select id="movies" value={this.state.selectedMovie} onChange = {(e) => {
                    this.setState({selectedMovie : e.target.value})
                } }><option value="avatar">Avatar</option><option value="avengers" >Avengers</option><option value="robo">Robo</option><option value="parasite">Parasite</option></select>
                <input type="number" id="rating" value={this.state.rating} name="rating" onChange = {(e) => {
                    this.setState({rating : e.target.value}
                    ) 
                   
                } }></input>
                <h4> Rating wise Movie List</h4>
                <div className="movie-list-container">

                    {movies.map((movie) => {
                        return <MovieCard movie={movie} />
                    })}
                </div>
            </div>

        )
    }
}

function mapStateToProps (store) {
    return {
        movieList : store
    }
}

export default connect(mapStateToProps,{updateRating})(MovieList)
