import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  
  // Animatioin for get to know me
  const firstVariants = {
    initial: {
      x: -400,
      y: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: 'spring',
        damping: 20
      }
    },
    exit: {
      x: -400,
      y: 50,
      opacity: 0,
      transition: {
        duration: 2
      }
    },
  }

  const itemVariants = {
    initial: {
      y: 50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 1
      }
    }
  }

  // Aminatin for skills section
  

  return (
    <div className='w-full min-h-[100vh] bg-bgColor pt-32 pb-16 flex flex-col gap-12 items-center overflow-hidden'>
      <h1 className='text-4xl font-bold text-goldColor'>About <span className='text-white'>Me</span></h1>
      <div className='flex flex-col gap-9 lg:flex-row w-full px-8 md:px-10 lg:px-36'>
        <div className='w-full lg:w-[50%] text-white text-[14px]'>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-3xl font-extrabold text-white mb-10'>Get To Know Me</motion.h3>
          <motion.div
            initial={{ opacity: 0, translateX: -500 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className='mb-5'>
            <p className='text-goldColor font-semibold mb-3'>My Education</p>
            <p className='mb-3'>2019 - 2024</p>
            <p className='opacity-70'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat. Corrupti rerum architecto perferendis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -500 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', damping: 30 }}
            className='mb-5'>
            <p className='text-goldColor font-semibold mb-3'>Web Development</p>
            <p className='mb-3'>2023 - 2024</p>
            <p className='opacity-70'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat. Corrupti rerum architecto perferendis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -500 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', damping: 40 }}
            className='mb-5'>
            <p className='text-goldColor font-semibold mb-3'>Work Experience</p>
            <p className='mb-3'>2018 - 2020</p>
            <p className='opacity-70 mb-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat. Corrupti rerum architecto perferendis
            </p>
            <p className='mb-3'>2021 - 2022</p>
            <p className='opacity-70'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat. Corrupti rerum architecto perferendis
            </p>
          </motion.div>
        </div>


        <div className='w-full lg:w-[50%]'>
          <h3 className='text-3xl font-extrabold text-white mb-10'>Skills</h3>
          <div className='text-white text-[14px] flex flex-col gap-4'>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className='flex flex-col gap-1'>
              <p>HTML</p>
              <div className='w-full h-2 bg-goldColor bg-opacity-30 rounded-full'>
                <div className='w-[90%] h-full bg-goldColor opacity-100 rounded-l-full'></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              className='flex flex-col gap-1'>
              <p>CSS</p>
              <div className='w-full h-2 bg-goldColor bg-opacity-30 rounded-full'>
                <div className='w-[80%] h-full bg-goldColor opacity-100 rounded-l-full'></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 40 }}
              className='flex flex-col gap-1'>
              <p>JavaScript</p>
              <div className='w-full h-2 bg-goldColor bg-opacity-30 rounded-full'>
                <div className='w-[70%] h-full bg-goldColor opacity-100 rounded-l-full'></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 50 }}
              className='flex flex-col gap-1'>
              <p>React JS</p>
              <div className='w-full h-2 bg-goldColor bg-opacity-30 rounded-full'>
                <div className='w-[82%] h-full bg-goldColor opacity-100 rounded-l-full'></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 60 }}
              className='flex flex-col gap-2'>
              <p>TypeScript</p>
              <div className='w-full h-2 bg-goldColor bg-opacity-30 rounded-full'>
                <div className='w-[60%] h-full bg-goldColor opacity-100 rounded-l-full'></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'spring', damping: 70 }}
              className='flex flex-col gap-2'>
              <p>Figma</p>
              <div className='w-full h-2 bg-goldColor bg-opacity-30 rounded-full'>
                <div className='w-[70%] h-full bg-goldColor opacity-100 rounded-l-full'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Technologies