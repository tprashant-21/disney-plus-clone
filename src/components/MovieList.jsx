import React, {useState,useRef, useEffect } from 'react'
import APIs from '../APIs/APIs'
import MovieCard from './MovieCard';
import AlternateMovieList from './AlternateMovieList';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({id, listNum}) {

  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef(null);

  useEffect(()=>{
    getMoviesByGenreId(id);
  }, [])

  const getMoviesByGenreId = (id) => {
    APIs.getMovieByGenreId(id).then((resp)=>{
        setMovieList(resp.data.results);
    })
  }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }


  return (
    <div>

        <IoChevronBackOutline className={`z-10 hidden md:block text-white text-3xl absolute mx-4 ${listNum % 3 == 0 ? `mt-16` : `mt-40`} cursor-pointer`} onClick={()=>slideLeft(elementRef.current)}/>
        <IoChevronForwardOutline className={`z-10 hidden md:block text-white ${listNum % 3 == 0 ? `mt-16` : `mt-40`} cursor-pointer text-3xl absolute mx-4 right-14`} onClick={()=>slideRight(elementRef.current)}/>
        
        

        <div className='flex overflow-x-auto pt-5 pb-5 px-3 gap-8 scroll-smooth' ref={elementRef}>
            {movieList.map((item, index) => (
                <>
                 { listNum%3 == 0 ? <AlternateMovieList key={index} movie={item} /> : <MovieCard key={index} movie={item} />}
                </>
            ))}
        </div>
    </div>
  )
}

export default MovieList