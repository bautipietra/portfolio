import React from 'react'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiExpress, SiDjango, SiPostgresql, SiMongodb, SiJavascript, SiTypescript, SiReact, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si'

const Languages = () => {
  const iconSize = '20px'
  return (
    <div className='flex gap-x-3 md:gap-x-4 gap-y-1 flex-wrap text-zinc-400 m-auto xl:m-0 justify-center xl:justify-start w-11/12'>
      <div className='flex items-center gap-2'>
        <SiHtml5 title='HTML' size={iconSize}></SiHtml5>
        <span className='font-medium hidden md:inline'>HTML</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiCss3 title='CSS' size={iconSize}></SiCss3>
        <span className='font-medium hidden md:inline'>CSS</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiJavascript title='Javascript' size={iconSize}></SiJavascript>
        <span className='font-medium hidden md:inline'>Javascript</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiTypescript title='Typescript' size={iconSize}></SiTypescript>
        <span className='font-medium hidden md:inline'>Typescript</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiReact title='React' size={iconSize}></SiReact>
        <span className='font-medium hidden md:inline'>React</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiRedux title='Redux' size={iconSize}></SiRedux>
        <span className='font-medium hidden md:inline'>Redux</span>
      </div>

      <div className='h-0 basis-full block xs:hidden md:block'></div>

      <div className='flex items-center gap-2'>
        <FaPython title='Python' size={iconSize}></FaPython>
        <span className='font-medium hidden md:inline'>Python</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiDjango title='Django' size={iconSize}></SiDjango>
        <span className='font-medium hidden md:inline'>Django</span>
      </div>
      <div className='flex items-center gap-2'>
        <FaNodeJs title='Node' size={iconSize}></FaNodeJs>
        <span className='font-medium hidden md:inline'>Node</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiExpress title='Express' size={iconSize}></SiExpress>
        <span className='font-medium hidden md:inline'>Express</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiMongodb title='MongoDB' size={iconSize}></SiMongodb>
        <span className='font-medium hidden md:inline'>MongoDB</span>
      </div>
      <div className='flex items-center gap-2'>
        <SiPostgresql title='PostgreSQL' size={iconSize}></SiPostgresql>
        <span className='font-medium hidden md:inline'>PostgreSQL</span>
      </div>
    </div>
  )
}

export default Languages