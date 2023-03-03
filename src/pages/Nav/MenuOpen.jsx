import React from 'react'
import { Link, useHref } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const MenuOpen = ({ isOpen, closeMenu }) => {
  const path = useHref()
  return (
    <AnimatePresence>
      {isOpen && <motion.div className='fixed left-0 top-0 md:hidden z-10 bg-slate-900 h-screen w-screen flex items-center justify-center bg-opacity-50 backdrop-blur-lg'
        initial={{ opacity: 0, scale: 0, borderRadius: '50%' }}
        animate={{ opacity: 1, scale: 1, borderRadius: '0%' }}
        exit={{ opacity: 0, scale: 0, borderRadius: '50%' }}
        transition={{ duration: 0.3 }}
      >
        <div className='grid-cols-4 relative text-center items-center group grid z-20'>

          {/* Links */}
          <span onClick={closeMenu} id='home' className='font-semibold text-lg w-full'><Link to={'/'} className='w-full px-4 py-2'>Home</Link></span>
          <span onClick={closeMenu} id='blog' className='font-semibold text-lg w-full'><Link to={'/blog'} className='w-full px-4 py-2'>Blog</Link></span>
          <span onClick={closeMenu} id='docs' className='font-semibold text-lg w-full'><Link to={'/docs'} className='w-full px-4 py-2'>Docs</Link></span>
          <span onClick={closeMenu} id='tools' className='font-semibold text-lg w-full'><Link to={'/tools'} className='w-full px-4 py-2'>Tools</Link></span>

          {/* Background links hover animation */}
          <div id='navHover' className={`absolute w-full h-[150%] rounded-xl -z-10 bg-gradient-to-r  from-sky-500 to-sky-700 col-start-1 col-span-1 transition-all 
    ${path == '/' && 'left-0'}
    ${path.includes('/blog') && 'left-[100%]'}
    ${path.includes('/docs') && 'left-[200%]'}
    ${path.includes('/tools') && 'left-[300%]'}
  `}></div>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default MenuOpen