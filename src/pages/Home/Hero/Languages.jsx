import React from 'react'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiExpress, SiPostgresql, SiMongodb, SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiNextdotjs, SiPhp, SiLaravel } from 'react-icons/si'

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
        <SiNextdotjs title='Next.js' size={iconSize}></SiNextdotjs>
        <span className='font-medium hidden md:inline'>Next.js</span>
      </div>

      <div className='h-0 basis-full block xs:hidden md:block'></div>

      <div className='flex items-center gap-2'>
        <SiPhp title='PHP' size={iconSize}></SiPhp>
        <span className='font-medium hidden md:inline'>PHP</span>
      </div>
      <div className='flex items-center gap-2'>
      <SiLaravel title='Laravel' size={iconSize}></SiLaravel>
        <span className='font-medium hidden md:inline'>Laravel</span>
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