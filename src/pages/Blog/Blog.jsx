import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BottomContainer from '../../components/BottomContainer';
import Title from '../../components/Title';
import articles from './Articles';

const Blog = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation('translation');

  useEffect(() => {
    if (i18n.language === 'EN') {
      toast.error(
        'I am currently creating content in Spanish only, sorry!'
      );
    }
  });

  return (
    <motion.div
      className='max-w-7xl m-auto px-2 xs:px-8 relative w-full min-h-screen flex flex-col gap-12 mt-40 pb-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <Title title={'Blog'}></Title>
      <div className='grid relative gap-4'>
        <motion.div
          className='absolute shadow-[0px_0px_300px_50px_#0ea5e9] left-full'
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
          className='absolute shadow-[0px_0px_300px_50px_#0ea5e9] top-full'
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
        {articles.map((a, i) => (
          <motion.div
            key={'f' + i}
            className='w-full h-full'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}>
            <Link
              to={'/blog/' + a.url}
              key={a.url}
              className='bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 rounded-xl grid group relative overflow-hidden md:grid-cols-12'>
              <BottomContainer></BottomContainer>
              <img
                src={a.thumbnail}
                alt=''
                className='md:col-span-4 h-full w-full object-cover'
              />
              <div className='flex flex-col md:col-span-8 relative px-8 py-4 justify-between gap-4'>
                <div className='grid gap-4'>
                  <h3 className='font-semibold text-2xl'>{a.title}</h3>
                  <p className='text-zinc-400'>{a.description}</p>
                </div>
                <div className='flex justify-between text-zinc-400 items-center self-end w-full'>
                  <span>{a.date}</span>
                  <span className='flex gap-2 items-center group-hover:text-sky-500 transition-colors'>
                    {t('blog.read')}{' '}
                    <BsArrowRight size={'20px'}></BsArrowRight>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
