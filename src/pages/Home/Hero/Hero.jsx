import React, { useEffect } from 'react'
import Code from './Code'
import Languages from './Languages'
import { TbChevronsDown } from 'react-icons/tb'
import { AiFillEye } from 'react-icons/ai'
import { motion } from 'framer-motion'
import ConfettiExplosion from 'react-confetti-explosion';
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation(['translation'])
  const { i18n } = useTranslation()

  const [isExploding, setIsExploding] = React.useState(false);
  useEffect(() => {
    if (isExploding) {
      setTimeout(() => {
        setIsExploding(false)
      }, 1500)
    }
  }, [isExploding])

  const getInTouchHandler = () => {
    setIsExploding(true)
    setTimeout(() => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200);
  }

  return (
    <motion.div className='flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-0 xl:justify-between w-full min-h-screen relative mt-40 md:mt-24 xl:mt-0'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      {/* Confetti on click at get in touch button */}
      {isExploding && <ConfettiExplosion particleCount={100} className='fixed left-1/2 -translate-x-1/2' />}

      {/* Light */}
      <motion.div className='absolute mt-[20%] shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      <div className='grid items-center gap-4 xl:max-w-2xl text-center xl:text-start'>

        {/* Hero Left side */}
        <h1 className='font-black text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl xl:text-[3.3rem]'>{t('hero.title')} <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700'>PietraDev</span><br></br>
          Full Stack Developer
        </h1>
        <Languages></Languages>
        <p className='text-zinc-400 font-medium m-auto xl:m-0 w-10/12'>{t('hero.description')}</p>
        <div className='flex gap-4 relative m-auto xl:m-0'>
          <button onClick={getInTouchHandler} className='font-semibold px-6 py-2 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl hover:scale-105 transition-transform flex items-center gap-2'>{t('hero.contact')} <TbChevronsDown size={'20px'}></TbChevronsDown></button>
          <div className='font-semibold p-0.5 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl overflow-hidden w-fit hover:scale-105 transition-transform'>
            <a href={i18n.language == 'EN' ?
              'https://drive.google.com/file/d/1Vgd9la-8OhLM_I1LgNedfllTl3uyIKvd/view' :
              'https://drive.google.com/file/d/1Si-6sC49_UTRTeg7uv1sEagCAHCyRPQu/view'
            } target='_blank' className='px-6 py-2 bg-[#112] rounded-xl flex items-center gap-2'>{t('hero.cv')} <AiFillEye></AiFillEye></a>
          </div>
        </div>
      </div>

      {/* Hero right */}
      <Code></Code>
    </motion.div>
  )
}

export default Hero