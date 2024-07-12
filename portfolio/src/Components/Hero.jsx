import React from 'react';
import myImage from '../Assets/port-img.png'
import { FiDownload } from "react-icons/fi";
import { motion } from 'framer-motion';


const Hero = () => {

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.3
      }
    }
  }

  const textSliderVariant = {
    initial: {
      x: 0
    },
    animate: {
      x: '-230%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 50,
        delay: 1
      }
    }
  }

  return (
    <div className='w-full h-[100vh] flex flex-col lg:flex-row relative  overflow-x-hidden -z-10'>
      <div className='w-full lg:w-[65%] h-[100%] bg-black flex items-center justify-center text-goldColor px-8 lg:px-32'>
        <div className='pt-10'>
          <motion.div
            variants={textVariants}
            initial='initial'
            animate='animate'
            className='w-[90%] lg:w-[70%]'>
            <motion.h1 variants={textVariants} className='text-4xl font-extrabold mb-6'>I'm Tomisin</motion.h1>
            <motion.p variants={textVariants} className='text-lg mb-7'>
              I enjoy creating robust and scalable front-end applications that provide excellent user experiences.
            </motion.p>
            <motion.button variants={textVariants} className='border border-white bg-white px-7 py-3 flex items-center gap-3 rounded-full'><FiDownload size={22} />Download Résumé</motion.button>
          </motion.div>
        </div>
      </div>
      <div className='w-[35%] h-[100%] hidden lg:block bg-goldColor relative'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className='rounded-full overflow-hidden w-[335px] h-[480px] flex items-center justify-center absolute right-72 top-20 z-20'>
            <img className='w-full h-full shadow-customShadow' src={myImage} alt='Tomisin' />
        </motion.div>
      </div>
      <div className='text-gray-300 absolute bottom-0 w-full'>
        <motion.h1
          variants={textSliderVariant}
          initial='initial'
          animate='animate'
          className='text text-[150px] whitespace-nowrap font-bold opacity-10'>I build user interfaces for web applications.</motion.h1>
      </div>
    </div>
  )
}

export default Hero