import React from 'react'

function AlternateMovieList({movie}) {

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <section className='transition-all hover:scale-105 duration-150 cursor-pointer ease-in-out'>
      <img src={IMAGE_BASE_URL + movie.backdrop_path} className='z-0 rounded-lg hover:border-[3px] border-gray-400  w-[110px] md:w-[200px]'></img>
      <h2 className='text-white w-[110px] md:w-[200px] mt-2'>{movie.title}</h2>
    </section>
  )
}

export default AlternateMovieList;