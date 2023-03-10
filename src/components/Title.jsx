import React from 'react'

const Title = ({ title }) => {
  return (
    <h2 className='text-center font-black text-2xl xxs:text-3xl xs:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 h-[115%]'>{title || 'title'}</h2>
  )
}

export default Title