import React from 'react'
import { GrSend } from "react-icons/gr";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='w-full h-screen bg-custom-image bg-cover bg-center text-white text-[15px] flex justify-center px-6 md:px-14 lg:px-36 py-28 overflow-hidden'>
      <div className='flex items-center'>
        <div className='w-[50%] hidden lg:block'>
          <motion.h1
            initial={{ x: -20, y: 20 }}
            animate={{ x: 20, y: -20 }}
            transition={{ duration: 2 , repeatType: 'mirror', repeat: Infinity }}
            className='w-[60%] text-[60px] font-extrabold mb-6 text-shadow-xl'>Let's work together</motion.h1>
          <motion.div
            initial={{ opacity: 0, translateX: -200 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'spring', damping: 40 }}>
            <p className='text-[20px] font-semibold'>Email</p>
            <p className='font-thin text-orange-200'>afolayantomisin1919@gmail.com</p>
          </motion.div>
        </div>
        <div className='w-full lg:w-[50%]'>
          <motion.form
            initial={{ opacity: 0, translateY: 200}}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className='bg-black w-full p-4 bg-opacity-70 rounded-lg shadow-customShadow'>
            <input type='text'placeholder='Name' name='name' className='bg-black w-full h-14 p-2 mb-4 border border-orange-500 outline-none rounded-lg'/>
            <input type='email' placeholder='Email' name='email' className='bg-black w-full h-14 p-2 mb-4 border border-orange-500 outline-none rounded-lg'/>
            <textarea placeholder='Message' name='message' className='bg-black w-full h-[100px] p-2 mb-4 border border-orange-500 outline-none rounded-lg'/>
            <button className='w-full bg-gradient-to-b from-orange-400 to-orange-700 flex items-center justify-center gap-2 px-6 py-3 rounded-lg cursor-pointer'>Send Message <GrSend  size={22} /></button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact