import React, { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import Spanish from '../../assets/spanish.png'
import English from '../../assets/english.png'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const Language = () => {
  const { i18n } = useTranslation()
  const [dropdown, setDropdown] = useState(false)

  const languageHandler = (boolean) => {
    i18n.changeLanguage(boolean ? 'EN' : 'ES')
    setDropdown(false)
    if (boolean) toast.success('Language changed to English')
    else toast.success('Idioma cambiado a Español')
  }

  return (
    <div className='relative z-20'>
      {/* Language button */}
      <button onClick={() => setDropdown(!dropdown)} className='flex items-center gap-2 cursor-pointer font-semibold text-lg'>
        {i18n.language == 'EN' ? <img src={English} alt='United States flag' className='h-4 object-cover'></img> : <img src={Spanish} alt='Spain flag' className='h-4 object-cover'></img>}
        {i18n.language == 'EN' ? 'EN' : 'ES'}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={`${dropdown && 'rotate-90'} transition-transform bi bi-chevron-right`}>
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {dropdown && <motion.div
          className='absolute top-full w-[120%] left-1/2 -translate-x-1/2 translate-y-2 bg-gradient-to-r  from-sky-500 to-sky-700 rounded-xl overflow-hidden grid divide-y divide-sky-600'
          initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-8px' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '8px' }}
          exit={{ opacity: 0, scale: 0.5, x: '-50%', y: '-8px' }}
          transition={{ duration: 0.2 }}
        >
          <button onClick={() => languageHandler(false)} className='flex items-center gap-2 justify-between cursor-pointer hover:bg-sky-700 px-2 py-1 transition-colors'>ES <img src={Spanish} alt='Spain flag' className='h-4 object-cover'></img></button>
          <button onClick={() => languageHandler(true)} className='flex items-center gap-2 justify-between cursor-pointer hover:bg-sky-700 px-2 py-1 transition-colors'>EN <img src={English} alt='United States flag' className='h-4 object-cover'></img></button>
        </motion.div>}
      </AnimatePresence>
    </div >
  )
}

export default Language
