import React from 'react'

function NavbarItem({name, Icon}) {
  return (
    <div className="flex items-center gap-3 text-white text-lg font-semibold cursor-pointer
    hover:underline underline-offset-8 mb-2">
        <Icon/>
        <h2 className=''> {name.toUpperCase()} </h2>
    </div>
  )
}

export default NavbarItem