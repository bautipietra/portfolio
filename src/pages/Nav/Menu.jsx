import React, { useEffect, useState } from 'react'
import { disableScrolling, enableScrolling } from '../../utils/scrollHandler'
import MenuOpen from './MenuOpen'

const Menu = () => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (menu) disableScrolling()
    else enableScrolling()
  }, [menu])


  return (
    <div className="block md:hidden">
      <button className="relative group z-20" onClick={() => setMenu(!menu)} aria-label='menu'>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${menu && 'translate-x-10'}`} />
            <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${menu && 'translate-x-10'}`} />
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${menu && 'translate-x-10'}`} />
            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex w-0 ${menu && 'w-12'}`}>
              <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 ${menu && 'rotate-45'}`} />
              <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 ${menu && '-rotate-45'}`} />
            </div>
          </div>
        </div>
      </button>
      {
        <MenuOpen isOpen={menu} closeMenu={() => setMenu(false)}></MenuOpen>
      }
    </div>

  )
}

export default Menu