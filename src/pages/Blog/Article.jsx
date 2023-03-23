import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from './Articles';
import './article.module.scss';
import { motion } from 'framer-motion';
import CustomCursor from '../../components/CustomCursor';
import { TiArrowBack } from 'react-icons/ti';

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

      {/* Docs */}
      <div className='rounded-xl w-full px-2 md:px-16 lg:px-16 py-8 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0'>
        <Link to={'/blog'} className='cursorClick max-w-fit block'>
          <TiArrowBack
            size={'50px'}
            className='text-sky-500'></TiArrowBack>
        </Link>
        <div className='docStyle max-w-2xl m-auto'>
          <img
            src={article.thumbnail}
            alt={article.title}
            className='rounded-xl'
          />
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
