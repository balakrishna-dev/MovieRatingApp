import React, { Component } from 'react'

export class MovieCard extends Component {
    constructor(props){
        super(props);
       
    }
    render() {
        console.log(this.props)
        const {name, releaseDate,isNominated,rating} = this.props.movie;
        return (
            <div className="movie-container" >
                <div className="detail">{name}</div>
                <div className="detail">{isNominated ? "Nominated For Oscar" : "Not Nominated for Oscor"}</div>
                <div className="detail">{releaseDate}</div>
                <div className="detail">{rating}</div>
            </div>
        )
    }
}

export default MovieCard
