import React, { useState } from 'react'
import { FaTimes, FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Header = () => {
  // State to show nav links
  const [showMenu, setShowMenu] = useState(false);

    const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200
      }
    },
    closed: {
      y: 50,
      opacity: 0
    }
  }

  return (
    <div className='w-full  bg-bgColor text-orange-500 h-[70px] lg:h-[85px] fixed top-0 left-0 flex items-center justify-between px-8 lg:px-32 z-50'>
      <motion.div
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness:100, damping: 10, delay: 0.5 }}
        className='text-2xl font-extrabold z-50'>TOMISIN</motion.div>
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
       className={`bg-gradient-to-b from-orange-400 to-orange-700 flex flex-col gap-11 items-center justify-center fixed top-0 left-0 lg:left-[1000px] right-0 bottom-0 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} duration-500 ease-out shadow-customShadow`}>
        <motion.div
        animate={ showMenu ? 'open' : 'closed' }
        variants={variants}
        className='flex flex-col gap-6 items-center text-xl font-semibold text-white w-full'>
          <motion.p onClick={() => setShowMenu(!showMenu)} variants={itemVariants}><Link to={'/'}>Home</Link></motion.p>
          <motion.p onClick={() => setShowMenu(!showMenu)} variants={itemVariants}><Link to={'/my-work'}>My Work</Link></motion.p>
          <motion.p onClick={() => setShowMenu(!showMenu)} variants={itemVariants}><Link to={'résumé'}>My Résumé</Link></motion.p>
          <motion.p variants={itemVariants}><Link></Link></motion.p>

          <motion.div variants={itemVariants} className='w-full flex items-center justify-center gap-5 mt-6'>
          <div className='bg-white w-[45px] h-[1px]'></div>
          <a href='www.willsoonbeadded.com'><FaGithub size={22} /></a>
          <a href='www.willsoonbeadded.com'><FaLinkedinIn size={25} /></a>
          <a href='www.willsoonbeadded.com'><FaXTwitter size={25} /></a>
          <div className='bg-white w-[45px] h-[1px]'></div>
        </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness:100, damping: 10, delay: 0.5 }}
        onClick={() => setShowMenu(!showMenu)} className={`z-50 cursor-pointer ${showMenu ? 'text-white' : 'text-orange-500'}`}>
        {showMenu ? <FaTimes size={25} /> : <FaBars size={25}/>}
      </motion.div>
    </div>
  )
}

export default Header