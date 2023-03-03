import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Title from '../../components/Title'
import BackDocs from './BackDocs'
import FrontDocs from './FrontDocs'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import CustomCursor from '../../components/CustomCursor'

const Docs = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language === 'EN') {
      toast.error('I am currently creating content in Spanish only, sorry!')
    }
  })

  return (
    <motion.div className='max-w-7xl m-auto px-2 xs:px-8 relative w-full min-h-screen flex flex-col gap-12 mt-40 pb-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>

      {/* Custom cursor */}
      <CustomCursor></CustomCursor>

      {/* Lights */}
      <motion.div className='absolute  left-full -translate-x-1/2 top-[100vh]  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div className='absolute  -translate-x-1/2 top-[40vh]  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div className='absolute  -translate-x-1/2 top-full  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      {/* Content */}
      <Title title={'Documentación'}></Title>
      <FrontDocs></FrontDocs>
      <BackDocs></BackDocs>
    </motion.div >
  )
}

export default Docs