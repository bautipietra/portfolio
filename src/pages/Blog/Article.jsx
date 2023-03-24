import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from './Articles';
import './article.module.scss';
import { motion } from 'framer-motion';
import CustomCursor from '../../components/CustomCursor';
import { TiArrowBack } from 'react-icons/ti';
import bautista from '../../assets/bautista-pietraroia.webp';
import Logo from '../../assets/logo.webp';
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImTwitch } from 'react-icons/im';

const Article = () => {
  let { id } = useParams();
  const article = articles.find((a) => a.url == id);
  return (
    <motion.div
      className='max-w-7xl m-auto px-2 md:px-8 w-full min-h-screen mt-40 mb-32 relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      {/* Custom cursor */}
      <CustomCursor></CustomCursor>

      {/* Lights */}
      <motion.div
        className='absolute  -translate-x-1/2 shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>
      <motion.div
        className='absolute  left-full -translate-x-1/2 top-[100vh]  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>
      <motion.div
        className='absolute  -translate-x-1/2 top-full  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>

      <div className='grid rounded-xl w-full px-2 md:px-16 lg:px-16 py-16 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 gap-16 lg:grid-cols-12'>
        <div className='grid lg:col-span-8 gap-8 '>
          <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
              <li className='inline-flex items-center'>
                <Link
                  to='/'
                  className='inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white '>
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className='flex items-center'>
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <Link
                    to='/blog'
                    className='ml-1 text-sm font-medium text-zinc-400 hover:text-white md:ml-2 '>
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current='page'>
                <div className='items-center hidden sm:flex'>
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='ml-1 text-sm font-medium text-zinc-400 md:ml-2 '>
                    {article.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className='flex items-center gap-2 text-sm font-medium text-zinc-400  w-full'>
            <img
              src={bautista}
              alt='Bautista Pietraroia'
              className='h-8 w-8 object-cover rounded-full'
            />
            <a
              href='https://www.linkedin.com/in/bautista-pietraroia/'
              target={'_blank'}>
              Bautista Pietraroia
            </a>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <div className='docStyle'>
            <img
              src={article.thumbnail}
              alt={article.title}
              className='rounded-xl'
            />
            <h1>{article.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </div>
        </div>

        <div className=' lg:col-span-4 flex flex-col gap-8'>
          <div className='p-4 border-solid border-zinc-400/20 border-[1px] rounded-xl flex flex-col justify-center gap-4 h-fit text-zinc-400  text-sm font-medium text-center'>
            <img
              src={Logo}
              alt='pietradev logo'
              className='object-cover max-h-10 w-fit m-auto'
            />
            <p>
              Si crees que mi contenido te es útil, te invito a seguirme en
              mis otras redes! 😏
            </p>
            <div className='flex gap-4 justify-center w-full'>
              <a
                target={'_blank'}
                href='https://github.com/bautipietra'
                className='hover:text-white transition-colors'>
                <FaGithub></FaGithub>
              </a>
              <a
                target={'_blank'}
                href='https://www.linkedin.com/in/bautista-pietraroia/'
                className='hover:text-white transition-colors'>
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a
                target={'_blank'}
                href='https://discord.com/invite/AYY7ap6URa'
                className='hover:text-white transition-colors'>
                <FaDiscord></FaDiscord>
              </a>
              <a
                target={'_blank'}
                href='https://twitter.com/pietradev'
                className='hover:text-white transition-colors'>
                <BsTwitter></BsTwitter>
              </a>
              <a
                target={'_blank'}
                href='https://www.twitch.tv/pietradev'
                className='hover:text-white transition-colors'>
                <ImTwitch></ImTwitch>
              </a>
            </div>
          </div>
          <div className='p-4 border-solid border-zinc-400/20 border-[1px] rounded-xl flex flex-col justify-center gap-4 h-fit text-zinc-400  text-sm font-medium'>
            <h2 className='text-xl font-black text-center text-sky-500'>
              Etiquetas
            </h2>
            <div className='flex gap-2 flex-wrap justify-center text-center'>
              {article.tags.map((t) => (
                <span
                  key={t}
                  className='border-solid border-[1px] border-zinc-400/10 px-2 py-1 rounded-xl'>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className='p-4 border-solid border-zinc-400/20 border-[1px] rounded-xl flex flex-col justify-center gap-4 h-fit text-zinc-400  text-sm font-medium divide-y-2 divide-zinc-400/10'>
            <h2 className='text-xl font-black text-center text-sky-500'>
              Artículos recientes
            </h2>
            {articles.map((a) => (
              <Link
                to={`/blog/${a.url}`}
                key={a.url}
                className='grid gap-2 p-2 group'>
                <h3 className='text-white group-hover:text-sky-500 transition-colors'>
                  {a.title}
                </h3>
                <span className='text-xs'>{a.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
