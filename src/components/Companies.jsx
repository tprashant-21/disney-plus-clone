import React from 'react';
import pixar from '../assets/Image/pixar.png';
import disney from '../assets/Image/disney.png'
import marvel from '../assets/Image/marvel.png'
import nationalG from '../assets/Image/nationalG.png'
import starwar from '../assets/Image/starwar.png'
 
import starwarV from '../assets/Video/star-wars.mp4'
import disneyV from '../assets/Video/disney.mp4'
import marvelV from '../assets/Video/marvel.mp4'
import nationalGeographicV from '../assets/Video/national-geographic.mp4'
import pixarV from '../assets/Video/pixar.mp4'


function Companies() {

    const companiesList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        }
    ]


  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
        {companiesList.map((company, index) => (
            <div key={index} className='border-2 border-gray-400 rounded-lg shadow-xl shadow-gray-800  hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
                <video src={company.video} autoPlay loop playsInline className='opacity-0 hover:opacity-50 absolute top-0 z-0 rounded-md'></video>
                <img src={company.image} className='w-full z-1'></img>
            </div>
        ))}
    </div>
  )
}

export default Companies;