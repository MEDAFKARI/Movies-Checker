import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams , NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import '../Style/Detail.css';

const MovieDetailsPage = (P) => {

    const [Movie, setMovie] = useState({})
    const imdbId = useParams();


    const fetchMovie =(MovieId) =>{
        const MovieDetailsUrl = `https://www.omdbapi.com/?i=${MovieId.imdbId}&apikey=3d47b9e8`

        fetch(MovieDetailsUrl)
        .then(response => response.json())
        .then(result =>{
            
            setMovie(result) 
       })
    }

    useEffect(() => {
        fetchMovie(imdbId)
    }
    )

    const MovieAffiche = () =>{

        return(
            <div class="cardDetail">
            <img src ={Movie.Poster} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{Movie.Title}</h5>
              <p class="card-text">{Movie.Plot}</p>
            
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Released : {Movie.Released}</li>
              <li class="list-group-item">Writer : {Movie.Writer}</li>
              <li class="list-group-item">Runtime : {Movie.Runtime}</li>
              <li class="list-group-item">Rated : {Movie.Rated}</li>
              <li class="list-group-item">Type : {Movie.Type}</li>
              <li class="list-group-item">IMDB Rating : {Movie.imdbRating}</li>
              <li class="list-group-item">INDB Votes : {Movie.imdbVotes}</li>
            </ul></div>
          </div>
            )

    }


    
  return (
    <div >
            <Navbar/>
            <div className='containerDetail'>
            <MovieAffiche /> </div>
    </div>
  )
}

export default MovieDetailsPage
