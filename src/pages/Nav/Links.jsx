import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({ path }) => {
  return (
    <div className='grid-cols-4 relative text-center items-center group hidden md:grid'>
      {/* Links */}
      <span id='home' className='font-semibold text-lg w-full'><Link to={'/'} className='w-full px-4 py-2'>Home</Link></span>
      <span id='blog' className='font-semibold text-lg w-full'><Link to={'/blog'} className='w-full px-4 py-2'>Blog</Link></span>
      <span id='docs' className='font-semibold text-lg w-full'><Link to={'/docs'} className='w-full px-4 py-2'>Docs</Link></span>
      <span id='tools' className='font-semibold text-lg w-full'><Link to={'/tools'} className='w-full px-4 py-2'>Tools</Link></span>

      {/* Background links hover animation */}
      <div id='navHover' className={`absolute w-full h-[150%] rounded-xl -z-10 bg-gradient-to-r  from-sky-500 to-sky-700 col-start-1 col-span-1 transition-all 
    ${path == '/' && 'left-0'}
    ${path.includes('/blog') && 'left-[100%]'}
    ${path.includes('/docs') && 'left-[200%]'}
    ${path.includes('/tools') && 'left-[300%]'}
    `}></div>
    </div>
  )
}

export default Links