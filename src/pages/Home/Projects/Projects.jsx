import React from 'react'
import Title from '../../../components/Title'
import sneakers from '../../../assets/projects/sneakers.webp'
import tasty from '../../../assets/projects/tasty.webp'
import weather from '../../../assets/projects/weather.webp'

const Projects = () => {
  return (
    <div className='grid gap-12'>
      <Title title={'Projects'}></Title>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 justify-between items-stretch gap-4'>
        <a href='https://sneakers.bautistapietraroia.com.ar/' target={'_blank'} className='group w-full h-full overflow-hidden rounded-xl cursorClick'>
          <img src={sneakers} alt="ecommerce project" className='group-hover:scale-105 transition-transform object-cover' />
        </a>
        <a href='https://weather.bautistapietraroia.com.ar/' target={'_blank'} className='group w-full h-full overflow-hidden rounded-xl cursorClick'>
          <img src={weather} alt="weather app project" className='group-hover:scale-105 transition-transform object-cover' />
        </a>
        <a href='https://tasty.bautistapietraroia.com.ar/' target={'_blank'} className='group w-full h-full overflow-hidden rounded-xl cursorClick'>
          <img src={tasty} alt="recipes app project" className='group-hover:scale-105 transition-transform object-cover' />
        </a>
      </div>
    </div >
  )
}

export default Projects