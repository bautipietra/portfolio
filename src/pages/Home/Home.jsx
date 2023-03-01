import React from 'react'
import Hero from './Hero/Hero'
import { motion } from 'framer-motion'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <main className='max-w-7xl m-auto px-2 xs:px-8 w-full grid gap-12'>
      <motion.div className='absolute  left-full -translate-x-1/2 top-[100vh]  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <Hero></Hero>
      <Contact></Contact>
    </main>
  )
}

export default Home