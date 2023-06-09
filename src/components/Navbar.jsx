import {useState} from 'react'
import logo from '../assets/Image/logo.png'
import NavbarItem from './NavbarItem';

import { 
    HiPlayCircle,
    HiTv,
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    }
    from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";

function Navbar() {

  const [headerItemCollapse, setHeaderItemCollapse] = useState(true);

  // collections of name and icon for Navbar
  const navItems = [
    {
      name: 'Home',
      icon: HiHome
    },
    {
      name: 'Search',
      icon: HiMagnifyingGlass
    },
    {
      name: 'Watch List',
      icon: HiPlus
    },
    {
      name: 'Originals',
      icon: HiStar
    },
    {
      name: 'Movies',
      icon: HiPlayCircle
    },
    {
      name: 'Series',
      icon: HiTv
    },

  ]
  return (
    <div className="flex items-center justify-between p-5">

      <div className="flex gap-8 items-center">

        <img src = {logo} alt="Disney Plus logo" className="w-20 md:w-40 object-cover"></img>

        <div className='hidden md:flex gap-8'>

          {navItems.map((item, index)=>(
          <NavbarItem key={index} name={item.name} Icon={item.icon}/>
          ))}

        </div>

        <div className='flex md:hidden gap-8'>

          {navItems.map((item, index)=>(index<3 &&
          <NavbarItem key={index} name={""} Icon={item.icon}/>
          ))}

          <div className="md:hidden" onClick={()=>setHeaderItemCollapse(!headerItemCollapse)}>
            <NavbarItem name=""  Icon={HiDotsVertical}/>
            {headerItemCollapse && <div className='absolute p-3 mt-3 bg-[#121212] px-5 py-3 border-[1px] border-gray-600'>
                {navItems.map((item, index)=>(index>3 &&
              <NavbarItem key={index} name={item.name} Icon={item.icon}/>
              ))}
            </div>}


          </div>

        </div>
        

      </div>
      
      {/* img credit to https://whatsondisneyplus.com/encanto-mirabel-profile-avatar-added-to-disney/ */}
      <img src="https://i.pinimg.com/736x/3d/0a/d6/3d0ad6219d1d58ce1b9ce45e1b2b5754.jpg" className="rounded-full w-10"></img>
        
    </div>
  )
}

export default Navbar