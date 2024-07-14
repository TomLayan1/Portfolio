import React from 'react'
import work from '..//Assets/Chromium.jpg'
import { motion } from 'framer-motion'

const Work = () => {
  const workImg = {
    backgroundImage: `url(${work})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div className='w-full text-white'>
      <div className='w-full h-[100vh] bg-black flex items-center justify-center'>
        <h1 className='text-5xl md:text-7xl font-extrabold text-center'>My <span className='text-orange-500'>Work</span></h1>
      </div>
      <div className='w-full px-8 py-10 lg:px-32 lg:py-14 bg-bgColor flex flex-col gap-12 items-center justify-center overflow-hidden'>

        <div className='h-[70vh] flex items-center'>
          <div className='flex gap-10'>
            <motion.div
              initial={{ opacity: 0, translateX: -300}}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              style={workImg} className='w-[400px] h-[250px] rounded-lg border border-orange-500'></motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 300}}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20}}
              className='flex flex-col gap-4 w-[400px]'>
              <h2 className='text-3xl font-bold'>Name of app</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat.</p>
              <div className='flex flex-wrap gap-4'>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>HTML</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>CSS</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>JavaScript</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>React JS</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='h-[70vh] flex items-center'>
          <div className='flex flex-row-reverse gap-10'>
            <motion.div
              initial={{ opacity: 0, translateX: 300}}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              style={workImg} className='w-[400px] h-[250px] rounded-lg border border-orange-500'></motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -300}}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20}}
              className='flex flex-col gap-4 w-[400px]'>
              <h2 className='text-3xl font-bold'>Name of app</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat.</p>
              <div className='flex flex-wrap gap-4'>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>HTML</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>CSS</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>JavaScript</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>React JS</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='h-[70vh] flex items-center'>
          <div className='flex gap-10'>
            <motion.div
              initial={{ opacity: 0, translateX: -300}}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              style={workImg} className='w-[400px] h-[250px] rounded-lg border border-orange-500'></motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 300}}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20}}
              className='flex flex-col gap-4 w-[400px]'>
              <h2 className='text-3xl font-bold'>Name of app</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat.</p>
              <div className='flex flex-wrap gap-4'>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>HTML</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>CSS</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>JavaScript</p>
                <p className='bg-orange-500 border border-orange-500 bg-opacity-50 px-5 py-1 rounded-full'>React JS</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work