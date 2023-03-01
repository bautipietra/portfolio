import React from 'react'
import Title from '../../../components/Title'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ImTwitch } from 'react-icons/im'

const Contact = () => {
  const size = '30px'
  return (
    <div id='#contact' className='grid gap-16 pb-32'>
      <Title title={'Get in touch'}></Title>
      <div className='grid grid-cols-3 gap-4'>
        <a href='https://www.linkedin.com/in/bautista-pietraroia/' target={'_blank'} aria-label='Linkedin' className='h-full w-full bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#0284c7]'>
          <FaLinkedinIn size={size} className='drop-shadow-2xl'></FaLinkedinIn>
        </a>
        <a href='https://github.com/bautipietra' target={'_blank'} aria-label='Github' className='h-full w-full bg-gradient-to-r  from-slate-600 to-slate-800 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#334155]'>
          <FaGithub size={size} className='drop-shadow-2xl'></FaGithub>
        </a>
        <a href='mailto:bautistapietraroia@gmail.com' aria-label='Mail' className='h-full w-full bg-gradient-to-r  from-red-500 to-red-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#dc2626]'>
          <GrMail size={size} className='drop-shadow-2xl'></GrMail>
        </a>
        <a href='https://www.youtube.com/@pietradev' target={'_blank'} aria-label='Youtube' className='h-full w-full bg-gradient-to-r  from-red-500 to-red-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#dc2626]'>
          <BsYoutube size={size} className='drop-shadow-2xl'></BsYoutube>
        </a>
        <a href='https://www.twitch.tv/pietradev' target={'_blank'} aria-label='Twitch' className='h-full w-full bg-gradient-to-r  from-indigo-600 to-indigo-800 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#4338ca]'>
          <ImTwitch size={size} className='drop-shadow-2xl'></ImTwitch>
        </a>
        <a href='https://twitter.com/pietradev' target={'_blank'} aria-label='Twitter' className='h-full w-full bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#0284c7]'>
          <BsTwitter size={size} className='drop-shadow-2xl'></BsTwitter>
        </a>
      </div>
    </div>
  )
}

export default Contact