import React from 'react'
import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { motion } from 'framer-motion'

const FrontDocs = () => {
  const size = '80px'
  const front = [
    {
      name: 'HTML',
      icon: <FaHtml5 size={size} className='min-w-min' />,
      description: 'HTML es un lenguaje de marcado utilizado para crear páginas web y definir su estructura y contenido. Con él, se pueden incorporar diferentes elementos como texto, imágenes, videos, formularios y otros elementos multimedia. Es fundamental para el desarrollo de páginas web y es la base para otros lenguajes de programación web como CSS y JavaScript.',
      tag: false,
      link: '/docs/html'
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt size={size} className='min-w-min' />,
      description: 'CSS da estilo y presenta las páginas web creadas con HTML. Permite definir propiedades como colores, fuentes, tamaños y diseños, lo que crea páginas web visualmente atractivas y responsivas. También permite agregar efectos de animación y transiciones, y se puede utilizar en combinación con HTML y JavaScript para crear páginas web dinámicas e interactivas. Es esencial para diseñadores y desarrolladores web.',
      tag: 'Próximamente',
      link: '/docs'
    },
    {
      name: 'Javascript',
      icon: <IoLogoJavascript size={size} className='min-w-min' />,
      description: 'JavaScript es un lenguaje de programación que se utiliza para crear interactividad en las páginas web. Con él se pueden hacer efectos de animación, validación de formularios y actualizaciones de contenido en tiempo real, entre otras cosas. También se puede usar en el lado del servidor para crear aplicaciones web más complejas. Es esencial para desarrolladores web que quieran crear páginas web modernas e interactivas.',
      tag: 'Próximamente',
      link: '/docs'
    },
    {
      name: 'React',
      icon: <FaReact size={size} className='min-w-min' />,
      description: 'React es una biblioteca de JavaScript que se usa para crear interfaces de usuario interactivas y dinámicas. Permite crear componentes reutilizables que forman la interfaz de usuario, lo que facilita la creación de aplicaciones web escalables y mantenibles. También permite la creación de aplicaciones móviles nativas para iOS y Android. Es una herramienta esencial para desarrolladores web que quieran crear aplicaciones web modernas.',
      tag: 'Próximamente',
      link: '/docs'
    }
  ]
  return (
    <div className='grid gap-8'>
      <h3 className='font-black text-xl xxs:text-xl xs:text-2xl xl:text-3xl text-transparent bg-clip-text text-white'>FrontEnd</h3>
      {front.map((e, i) => (
        <motion.div key={'f' + i} className='w-full h-full'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <Link to={e.link} className='w-full h-full p-8 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 rounded-xl flex flex-col lg:flex-row gap-4 items-center hover:shadow-[0px_0px_10px_1px_#0ea5e9] transition-all'>
            {e.icon}
            <div className='grid gap-2'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-xl'>{e.name}</h3>
                {e.tag && <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-sky-200 text-sky-500 rounded-full">
                  {e.tag}
                </div>}
              </div>
              <span className='text-zinc-400'>{e.description}</span>
            </div>
          </Link>
        </motion.div>
      )
      )}
    </div>
  )
}

export default FrontDocs