import React, {useEffect} from 'react'
import getTrendingVideos from '../APIs/APIs'

function SlidingBar() {

    const getTrendingMovies = () => {
        getTrendingVideos.then((resp) => {
            console.log(resp)
        })
    }

    useEffect(()=>{
        getTrendingMovies()
    },[])

    


  return (
    <div className='text-white'>SlidingBar</div>
  )
}

export default SlidingBar