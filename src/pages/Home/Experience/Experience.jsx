import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../../components/Title'
import { motion } from 'framer-motion'

const Experience = () => {
  const { t } = useTranslation(['translation'])
  return (
    <div className='grid -mt-20 gap-16 relative'>
      <motion.div className='absolute top-full shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <Title title={t('experience.title')}></Title>
      <ol
        className="border-l border-zinc-400 lg:grid grid-flow-col auto-cols-fr lg:justify-center lg:gap-16 lg:border-l-0 lg:border-t">

        {/* Experience 1 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.nsDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Next Step <span className='text-sky-400'>, Full Stack Developer</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.tech')}:</span> React, Python, Django, MongoDB</p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('experience.ns1')}</li>
              <li>{t('experience.ns2')}</li>
              <li>{t('experience.ns3')}</li>
            </ul>
          </div>
        </li>

        {/* Experience 2 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.chDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Coderhouse <span className='text-sky-400'>, {t('experience.coderhouse')}</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.tech')}:</span> Node, Express, MongoDB, MySQL</p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('experience.ch1')}</li>
              <li>{t('experience.ch2')}</li>
              <li>{t('experience.ch3')}</li>
            </ul>
          </div>
        </li>

        {/* Experience 3 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.msDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Mercado Solidario <span className='text-sky-400'>, Frontend Developer</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.tech')}:</span> React, Next, Tailwind</p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('experience.ms1')}</li>
              <li>{t('experience.ms2')}</li>
              <li>{t('experience.ms3')}</li>
            </ul>
          </div>
        </li>

        {/* Experience 4 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.shDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Soy Henry <span className='text-sky-400'>, {t('experience.soyhenry')}</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.tech')}:</span> React, Node, Express, PostgreSQL</p>
            <p className="mb-3 text-zinc-400 grid gap-2">
              <span>{t('experience.sh1')}</span>
              <span>{t('experience.sh2')}</span>
              <span>{t('experience.sh3')}</span>
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default Experience