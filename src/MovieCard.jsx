import React from 'react';

const MovieCard = ({testObj}) => {
    console.log(testObj)
    return (
        <div className='movie'>
            <div>
                <p>{testObj.Year}</p>
            </div>
            <div>
                <img src={testObj.Poster !== 'N/A' ? testObj.Poster : 'https://via.placeholder.com/400'} alt={testObj.Title} />
            </div>
            <div>
                <span>{testObj.Type}</span>
                <h3>{testObj.Title}</h3>    
            </div>
        </div>
    )
    
}

export default MovieCard;