import React, {useState, useRef, useEffect} from 'react';
import API from '../APIs/APIs';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2';

function SlidingBar() {

    const elementRef = useRef();

    const screenWidth = window.innerWidth;

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    const [moviesList, setMoviesList] = useState([]);

    const SlideLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }

    const SlideRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }

    const getTrendingMovies = () => {
        API.getTrendingVideos.then((resp) => {
            setMoviesList(resp.data.results);
        });
    };

    useEffect(()=>{
        getTrendingMovies();
    },[]);

  return (
    <div>
        
        <HiChevronLeft className='hidden md:block text-white text-3xl absolute mx-8 mt-40 cursor-pointer' onClick={()=>SlideLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-3xl absolute mx-8 right-0 mt-40 cursor-pointer' onClick={()=>SlideRight(elementRef.current)}/>
        

        <div className='flex overflow-x-auto w-full px-16 py-4 scroll-smooth' ref={elementRef}>
            {moviesList.map((movie, index)=>(
                <img key={index} src={IMAGE_BASE_URL+movie.backdrop_path} className="min-w-full md:h-80 object-cover object-left-top mr-5 rounded-md hover:border-4 border-gray-400 transition-all duration-100 ease-in-out"></img>
            ))};
        </div>
    </div>
  );
}

export default SlidingBar;