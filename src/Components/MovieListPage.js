import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Style.css'

const MovieListPage = () => {

    const [searchTerm, setSearchTerm] = useState(0)
    const [Movies, setMovies] = useState([])
    const [noMovie, setNomovie] = useState(false)

    const HandleSearchTermChange =(e) =>{
            setSearchTerm(e.target.value)
    }

    useEffect (()=>{
        let term = localStorage.getItem("searchTerm")
        if(term){
            fetchMovies(term)
        }
    },[]
    )

    const fetchMovies =(MovieName) =>{
        const searchUrl = `https://www.omdbapi.com/?s=${MovieName}&page=2&apikey=3d47b9e8`


        localStorage.setItem("searchTerm",MovieName)

        fetch(searchUrl)
        .then(response => response.json())
        .then(result =>{
            if (result.Error) {
                setMovies([])
                setNomovie(true)
            }
            else {
                setNomovie(false)
                setMovies(result.Search)
            }
            })
    }


    const ClearResults =()=>{
        setSearchTerm('')
        setMovies([])
        localStorage.setItem("searchTerm",'')
        setNomovie(false)
    }

    

    const MoviesItems = Movies.map(movie => {
            return (
                <div key={movie.imdbID} className='MovieContainer'>
                    <div class="card" >
                        <img src={movie.Poster}  alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">{movie.Title}</h5>
                        <NavLink to={`/${movie.imdbID}`} className="btn tnpri">
  Details
</NavLink>
                        </div>
                    </div>
                    
                </div>
            )
    })


  return (
    <div className='container'>
      <h1>Movies Checker</h1>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">Search </span>
      <input type="text" class="form-control" placeholder="Movie Name" aria-label="Username" aria-describedby="addon-wrapping" onChange={HandleSearchTermChange}/>
      
      <button type="button" class="btn btn-warning" onClick={()=>fetchMovies(searchTerm)}> Search  </button>
      <button type="button" class="btn btn-danger" onClick={ClearResults}> Clear  </button>
      </div>
        <div className='MoviesContainer'>
        {MoviesItems}
        {noMovie ? <h1>No Movies Found</h1> : null}
        </div>
    </div>
  )
}

export default MovieListPage
