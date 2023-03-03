import React from 'react'
import { Link } from 'react-router-dom'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiDjango, SiExpress } from 'react-icons/si'

const BackDocs = () => {
  const size = '80px'
  const backend = [
    {
      name: 'Node',
      icon: <FaNodeJs size={size} className='min-w-min' />,
      description: 'Node.js es un entorno de tiempo de ejecución de JavaScript para crear aplicaciones web en el lado del servidor. Permite desarrollar aplicaciones escalables y de alta calidad utilizando paquetes y módulos de código abierto. Es esencial para los desarrolladores web que deseen crear aplicaciones modernas y escalables en el lado del servidor.',
      tag: 'Próximamente',
      link: '/docs'
    },
    {
      name: 'Express',
      icon: <SiExpress size={size} className='min-w-min' />,
      description: 'Express.js es un framework de JavaScript para crear aplicaciones web en el lado del servidor de manera rápida y sencilla. Se integra fácilmente con Node.js y proporciona funciones y herramientas útiles para el desarrollo de aplicaciones web. Es esencial para los desarrolladores web que deseen crear aplicaciones web modernas y escalables en el lado del servidor.',
      tag: 'Próximamente',
      link: '/docs'
    },
    {
      name: 'Python',
      icon: <FaPython size={size} className='min-w-min' />,
      description: 'Python es un lenguaje de programación interpretado de alto nivel, fácil de aprender y utilizar. Es utilizado en una amplia variedad de aplicaciones, desde desarrollo web hasta aprendizaje automático, análisis de datos, automatización de tareas y más. Python cuenta con una gran cantidad de librerías y herramientas que facilitan el desarrollo de aplicaciones y lo hacen un lenguaje esencial para cualquier programador.',
      tag: 'Próximamente',
      link: '/docs'
    },
    {
      name: 'Django',
      icon: <SiDjango size={size} className='min-w-min' />,
      description: 'Django es un framework de Python para el desarrollo web que proporciona herramientas completas para crear aplicaciones web seguras, escalables y mantenibles. Con una amplia variedad de características, como ORM, sistema de plantillas, manejo de formularios y autenticación de usuarios, Django es esencial para cualquier desarrollador web que busque crear aplicaciones web robustas y de alta calidad.',
      tag: 'Próximamente',
      link: '/docs'
    },
  ]
  return (
    <div className='grid gap-8'>
      <h3 className='font-black text-xl xxs:text-xl xs:text-2xl xl:text-3xl text-transparent bg-clip-text text-white'>BackEnd</h3>
      {backend.map((e, i) => (
        <Link to={e.link} key={i} className='p-8 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 rounded-xl flex flex-col lg:flex-row gap-4 items-center hover:shadow-[0px_0px_10px_1px_#0ea5e9] transition-all'>
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
      )
      )}
    </div>
  )
}

export default BackDocs