import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BottomContainer from '../../../components/BottomContainer';
import articles from '../../Blog/Articles';

const Blog = () => {
  const { t } = useTranslation('translation');
  return (
    <div className='grid gap-4'>
      <div className='flex justify-between items-center md:items-end flex-col md:flex-row'>
        <Title title={t('blog.title')}></Title>
        <Link
          to='/blog'
          className='flex gap-2 items-center text-sky-500 font-medium hover:scale-105 transition-transform'>
          {t('blog.view')} <BsArrowRight size={'20px'}></BsArrowRight>
        </Link>
      </div>
      <div className='grid lg:grid-cols-2 relative gap-4'>
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
        {articles.slice(0, 3).map((a) => (
          <Link
            to={'/blog/' + a.url}
            key={a.url}
            className='p-8 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0 rounded-xl grid gap-4 group relative overflow-hidden'>
            <BottomContainer></BottomContainer>
            <h3 className='font-semibold text-xl truncate'>{a.title}</h3>
            <div className='flex justify-between text-zinc-400'>
              <span>{a.date}</span>
              <span className='flex gap-2 items-center group-hover:text-sky-500 transition-colors'>
                {t('blog.read')}{' '}
                <BsArrowRight size={'20px'}></BsArrowRight>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
