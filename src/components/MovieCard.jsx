import React from 'react'

function MovieCard({movie}) {

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
        <img src={IMAGE_BASE_URL + movie.poster_path} className='z-0 rounded-lg hover:border-[3px] border-gray-400 hover:scale-105 w-[110px] md:w-[200px] transition-all duration-150 cursor-pointer ease-in-out'></img>
    </>
  )
}

export default MovieCard