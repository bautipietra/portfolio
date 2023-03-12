import React from 'react'
import Title from '../../../components/Title'
import sneakers from '../../../assets/projects/sneakers.webp'
import tasty from '../../../assets/projects/tasty.webp'
import weather from '../../../assets/projects/weather.webp'
import { useTranslation } from 'react-i18next'
import BottomContainer from '../../../components/BottomContainer'
import { FaGithub } from 'react-icons/fa'
import { ImLink } from 'react-icons/im'

const Projects = () => {
  const { t } = useTranslation(['translation'])
  return (
    <div className='grid gap-12'>
      <Title title={t('projects.title')}></Title>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='group h-full overflow-hidden rounded-xl p-4 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 pb-6 relative'>
          <div className='w-full h-full overflow-hidden grid gap-4'>
            <BottomContainer></BottomContainer>
            <img src={sneakers} alt="ecommerce project" className='object-cover rounded-xl h-full w-full' />
            <h3 className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700'>E-commerce</h3>
            <p>{t('projects.tech')}: React, Node, Express, PostgreSQL</p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('projects.ec1')}</li>
              <li>{t('projects.ec2')}</li>
              <li>{t('projects.ec3')}</li>
            </ul>
            <div className='grid grid-cols-2 items-stretch h-fit justify-between gap-4 self-end'>
              <a href="https://github.com/bautipietra/ecommerce" target={'_blank'} className='font-semibold px-6 py-2 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl transition-transform flex items-center gap-2 justify-center'><FaGithub></FaGithub>Github</a>
              <div className='font-semibold p-0.5 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl overflow-hidden transition-transform'>
                <a href="https://sneakers.bautistapietraroia.com.ar/" target='_blank' className='px-6 py-2 bg-[#112] rounded-xl flex items-center gap-2 justify-center h-full'><ImLink></ImLink>Deploy</a>
              </div>
            </div>
          </div>
        </div>
        <div className='group h-full overflow-hidden rounded-xl p-4 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 pb-6 relative'>
          <div className='w-full h-full overflow-hidden grid gap-4'>
            <BottomContainer></BottomContainer>
            <img src={weather} alt="weather app project" className='object-cover rounded-xl h-full w-full' />
            <h3 className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700'>{t('projects.waTitle')}</h3>
            <p>{t('projects.tech')}: React, SASS, Framer Motion</p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('projects.wa1')}</li>
              <li>{t('projects.wa2')}</li>
              <li>{t('projects.wa3')}</li>
            </ul>
            <div className='grid grid-cols-2 items-stretch h-fit justify-between gap-4 self-end'>
              <a href="https://github.com/bautipietra/weather-app" target={'_blank'} className='font-semibold px-6 py-2 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl transition-transform flex items-center gap-2 justify-center'><FaGithub></FaGithub>Github</a>
              <div className='font-semibold p-0.5 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl overflow-hidden transition-transform'>
                <a href="https://weather.bautistapietraroia.com.ar/" target='_blank' className='px-6 py-2 bg-[#112] rounded-xl flex items-center gap-2 justify-center h-full'><ImLink></ImLink>Deploy</a>
              </div>
            </div>
          </div>
        </div>
        <div className='group h-full overflow-hidden rounded-xl p-4 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 pb-6 relative'>
          <div className='w-full h-full overflow-hidden grid gap-4'>
            <BottomContainer></BottomContainer>
            <img src={tasty} alt="recipes app project" className='object-cover rounded-xl h-full w-full' />
            <h3 className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700'>{t('projects.trTitle')}</h3>
            <p>{t('projects.tech')}: React, Redux, Node, Express, PostgreSQL</p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('projects.tr1')}</li>
              <li>{t('projects.tr2')}</li>
              <li>{t('projects.tr3')}</li>
            </ul>
            <div className='grid grid-cols-2 items-stretch h-fit justify-between gap-4 self-end'>
              <a href="https://github.com/bautipietra/tasty-recipes-app" target={'_blank'} className='font-semibold px-6 py-2 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl transition-transform flex items-center gap-2 justify-center'><FaGithub></FaGithub>Github</a>
              <div className='font-semibold p-0.5 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl overflow-hidden transition-transform'>
                <a href="https://tasty.bautistapietraroia.com.ar/" target='_blank' className='px-6 py-2 bg-[#112] rounded-xl flex items-center gap-2 justify-center h-full'><ImLink></ImLink>Deploy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Projects