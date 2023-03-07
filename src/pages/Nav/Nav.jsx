import React from 'react'
import Logo from '../../assets/logo.webp'
import { Link, useHref } from 'react-router-dom'
import Language from './Language'
import Links from './Links'
import Menu from './Menu'

const Nav = () => {
  const path = useHref()

  return (
    <nav className='max-w-7xl w-full p-8 flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 z-10'>
      <Link to={'/'} className='z-20'>
        <img src={Logo} alt="pietradev logo" className='object-cover max-h-10' />
      </Link>
      <Links path={path}></Links>
      <Language></Language>
      <Menu></Menu>
    </nav>
  )
}

export default Nav