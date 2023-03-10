import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { motion } from 'framer-motion'
import undraw from '../../assets/tools/undraw.webp'
import colorhunt from '../../assets/tools/colorhunt.webp'
import happyhues from '../../assets/tools/happyhues.webp'
import googlefonts from '../../assets/tools/googlefonts.webp'
import pexels from '../../assets/tools/pexels.webp'
import fontawesome from '../../assets/tools/fontawesome.webp'
import rapidapi from '../../assets/tools/rapidapi.webp'
import tiltjs from '../../assets/tools/tiltjs.webp'
import pixie from '../../assets/tools/Pixie.webp'
import boostrapicons from '../../assets/tools/boostrapicons.webp'
import framermotion from '../../assets/tools/framermotion.webp'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import CustomCursor from '../../components/CustomCursor'

const Tools = () => {
  const { t } = useTranslation()

  let [searchParams, setSearchParams] = useSearchParams();
  let [query, setQuery] = useState(searchParams.get('category') || "all");

  const [toolsFiltered, setToolsFiltered] = useState([])
  useEffect(() => {
    if (query === 'all') setToolsFiltered(tools)
    else setToolsFiltered(tools.filter(t => t.category === query))
  }, [query])

  const filtersHandler = (e) => {
    const aux = e.target.id
    setQuery(aux)
    setSearchParams({ category: aux })
  }

  const categories = [
    'all',
    'frontend',
    'backend',
    'media',
    'icons',
    'typography',
    'animations',
  ]

  const tools = [
    {
      name: 'Undraw',
      image: undraw,
      category: 'frontend',
      url: 'https://undraw.co/illustrations'
    },
    {
      name: 'Google Fonts',
      image: googlefonts,
      category: 'typography',
      url: 'https://fonts.google.com/'
    },
    {
      name: 'Color Hunt',
      image: colorhunt,
      category: 'frontend',
      url: 'https://colorhunt.co/'
    },
    {
      name: 'Pexels',
      image: pexels,
      category: 'media',
      url: 'https://www.pexels.com/'
    },
    {
      name: 'Happy Hues',
      image: happyhues,
      category: 'frontend',
      url: 'https://www.happyhues.co/'
    },
    {
      name: 'Font Awesome',
      image: fontawesome,
      category: 'icons',
      url: 'https://fontawesome.com/'
    },
    {
      name: 'Rapid API',
      image: rapidapi,
      category: 'backend',
      url: 'https://rapidapi.com/'
    },
    {
      name: 'Tilt JS',
      image: tiltjs,
      category: 'animations',
      url: 'https://gijsroge.github.io/tilt.js/'
    },
    {
      name: 'Pixie',
      image: pixie,
      category: 'frontend',
      url: 'https://hype4.academy/tools/glassmorphism-generator'
    },
    {
      name: 'Boostrap Icons',
      image: boostrapicons,
      category: 'icons',
      url: 'https://icons.getbootstrap.com/'
    },
    {
      name: 'Framer Motion',
      image: framermotion,
      category: 'animations',
      url: 'https://www.framer.com/motion/'
    },
  ]


  return (
    <motion.div className='max-w-7xl m-auto px-2 xs:px-8 relative w-full min-h-screen flex flex-col gap-12 mt-40 pb-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <Title title={t('tools.title')}></Title>

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

      {/* Categories */}
      <div className='flex gap-2 justify-center items-center flex-wrap'>
        {categories.map((c, i) => (
          <div onClick={(e) => filtersHandler(e)} id={c} key={'i' + i} className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ring-0  rounded-full cursorClick ${query == c ? 'bg-white text-sky-500' : 'bg-gradient-to-r  from-sky-500 to-sky-700 text-white'}`}>
            {c}
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          toolsFiltered.map((t, i) => (
            <motion.a key={i} href={t.url} className='cursorClick' target={'_blank'}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <div className="overflow-hidden  aspect-video rounded-xl relative group">
                <div className="rounded-xl z-[5] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div className="w-full flex justify-between items-center p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-bold">{t.name}</div>
                    <div key={i} className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 text-white rounded-full ">
                      {t.category}
                    </div>
                  </div>
                </div>
                <img alt={t.name} className="object-cover w-full  h-full group-hover:scale-110 transition duration-300 ease-in-out" src={t.image} />
              </div>
            </motion.a>))
        }
      </div>
    </motion.div>
  )
}

export default Tools