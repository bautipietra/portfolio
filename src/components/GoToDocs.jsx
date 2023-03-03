import React from 'react'
import { TiArrowBack } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const GoToDocs = () => {
  return (
    <Link to={'/docs'} className='cursorClick max-w-fit block'>
      <TiArrowBack size={'50px'} className='text-sky-500'></TiArrowBack>
    </Link>
  )
}

export default GoToDocs