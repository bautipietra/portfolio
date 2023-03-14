import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { motion } from 'framer-motion'
import ErrorImage from '../../assets/error/404.png'
import CustomCursor from '../../components/CustomCursor'
import { useTranslation } from 'react-i18next'

const Error = () => {
  const { t } = useTranslation(['translation'])
  return (
    <motion.div className='flex flex-col items-center gap-8 h-full w-full text-center px-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>

      {/* Custom cursor */}
      <CustomCursor></CustomCursor>

      {/* Lights */}
      <motion.div className='absolute top-1/2 -translate-x-1/2 shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      <img src={ErrorImage} alt="404 error image" />
      <span className='font-bold text-2xl sm:text-4xl'>{t('error.title')}</span>
      <Link to='/' className='font-semibold px-6 py-2 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl hover:scale-105 transition-transform flex items-center gap-2'><TiArrowBack size={'20px'}></TiArrowBack> {t('error.button')}</Link>
    </motion.div>
  )
}

export default Error