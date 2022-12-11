import React, { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=65d4837b';

const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    
    useEffect(()=>{
        fetchData('Spiderman');
    },[])
    return (
        <div className='app'>
            <h1>Movieland</h1>
            <div className='search'>
                <input value={searchTerm} placeholder='Search for movies' onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                <img src={SearchIcon} alt='Search icon' onClick={()=>{fetchData(searchTerm)}} />
            </div>
            {movies?.length > 0 ? 
            <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard testObj={movie} />
                ))}
            </div> :
            <div className='empty'>
                <h2>No movies found.</h2>
            </div>
            }
            
        </div>
        
    )
}

export default App;