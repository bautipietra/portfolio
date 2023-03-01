import React, { useState } from 'react'
import { MdFileCopy } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import avatar from '../../../assets/bautista-pietraroia.webp'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const Code = () => {
  const { t } = useTranslation(['translation'])

  const [showImage, setshowImage] = useState(false)

  const copyHandler = () => {
    const code = document.querySelector('#code').innerText
    navigator.clipboard.writeText(code)
    toast.success('Copied to clipboard!')
  }

  return (
    <motion.div className='w-full  md:w-3/5 lg:w-2/4'
      animate={{ y: [5, -5] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      {<AnimatePresence>
        {showImage && <motion.div onClick={() => setshowImage(false)} className='fixed h-full w-full z-10 grid place-content-center top-0 left-0  bg-black bg-opacity-50 backdrop-blur-sm cursorClick'
          initial={{ opacity: 0, scale: 0, borderRadius: '50%' }}
          animate={{ opacity: 1, scale: 1, borderRadius: '12px' }}
          exit={{ opacity: 0, scale: 0, borderRadius: '50%' }}
          transition={{ duration: 0.2 }}
        >
          <img src={avatar} alt="Bautista Pietraroia" className='h-48 w-48 object-cover rounded-xl' />
        </motion.div>}
      </AnimatePresence>}
      <div className='bg-slate-900 bg-opacity-50 backdrop-blur-lg grid p-2 rounded-xl w-full divide-y-[1px] divide-zinc-600 gap-2'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-1'>
            <div className='p-1.5 rounded-full bg-zinc-600  hover:bg-red-400 transition-colors'></div>
            <div className='p-1.5 rounded-full bg-zinc-600  hover:bg-amber-400 transition-colors'></div>
            <div className='p-1.5 rounded-full bg-zinc-600  hover:bg-green-400 transition-colors'></div>
          </div>
          <span className='text-zinc-400 text-sm'>/index.js</span>
          <MdFileCopy fill='#52525b' className='cursorClick' onClick={copyHandler}></MdFileCopy>
        </div>
        <div className='w-full'>
          {/* escribir un code snippet de javascript */}
          <pre className='text-zinc-400 text-sm py-2 w-full relative'>
            <div className='absolute shadow-[0px_0px_300px_70px_#0ea5e9]'></div>
            <code id='code'>
              <span className="text-blue-400">const</span> {t('code.welcome')} <span className="text-blue-400">=</span> <span className='text-yellow-100'>()</span> <span className="text-blue-400">=&gt;</span> <span className='text-yellow-100'>&#123;</span> <br></br><br></br>
              {'  '}<span className="text-blue-400">const</span> {t('code.about')} <span className="text-blue-400">=</span> <span className='text-yellow-100'>&#123;</span> <br></br>
              {'  '}{'  '}<span className="text-blue-400">const</span> {t('code.name')} <span className="text-blue-400">=</span> '<span className="text-yellow-100">Bautista</span>' <br></br>
              {'  '}{'  '}<span className="text-blue-400">const</span> {t('code.lastname')} <span className="text-blue-400">=</span> '<span className="text-yellow-100">Pietraroia</span>' <br></br>
              {'  '}{'  '}<span className="text-blue-400">const</span> {t('code.nickname')} <span className="text-blue-400">=</span> '<span className="text-yellow-100">PietraDev</span>' <br></br>
              {'  '}{'  '}<span className="text-blue-400">const</span> {t('code.image')} <span className="text-blue-400">=</span> '<span className="text-yellow-100 underline cursor-pointer cursorClick" onClick={() => setshowImage(true)} >bautistapietraroia.jpg</span>'<br></br>
              {'  '}{'  '}<span className="text-blue-400">let</span> {t('code.age')} <span className="text-blue-400">=</span> <span className="text-yellow-100">19</span> <br></br>
              {'  '}{'  '}<span className="text-blue-400">const</span> {t('code.country')} <span className="text-blue-400">=</span> '<span className="text-yellow-100">Argentina</span>' <br></br>
              {'  '}{'  '}<span className="text-blue-400">const</span> {t('code.spanish')} <span className="text-blue-400">=</span> '<span className="text-yellow-100">{t('code.spanishValue')}</span>' <br></br>
              {'  '}{'  '}<span className="text-blue-400">let</span> {t('code.english')} <span className="text-blue-400">=</span> '<span className="text-yellow-100">{t('code.englishValue')}</span>' <br></br>
              {'  '}<span className='text-yellow-100'>&#125;</span> <br></br><br></br>
              {'  '}<span className="text-blue-400">return</span> {t('code.about')} <br></br>
              <span className='text-yellow-100'>&#125;</span> <br></br> <br></br>
              {t('code.welcome')}<span className='text-yellow-100'>()</span>
            </code>
          </pre>
        </div>
      </div>
    </motion.div >
  )
}

export default Code