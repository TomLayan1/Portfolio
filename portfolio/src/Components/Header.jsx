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
    <div className='bg-black text-goldColor w-full h-[70px] lg:h-[85px] fixed top-0 left-0 flex items-center justify-between px-5 lg:px-16'>
      <div className='text-2xl font-extrabold z-50'>TOMISIN</div>
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
       className={`bg-white flex flex-col gap-11 items-center justify-center fixed top-0 left-0 lg:left-[1000px] right-0 bottom-0 ${showMenu ? 'block' : 'hidden duration-1000 ease-out'} shadow-customShadow`}>
        <motion.div
        animate={ showMenu ? 'open' : 'closed' }
        variants={variants}
        className='flex flex-col gap-6 items-center text-xl font-semibold'>
          <motion.a variants={itemVariants}><Link>Home</Link></motion.a>
          <motion.a variants={itemVariants}><Link>My Work</Link></motion.a>
          <motion.a variants={itemVariants}><Link>My Résumé</Link></motion.a>
          <motion.a variants={itemVariants}><Link></Link></motion.a>

          <motion.div variants={itemVariants} className='flex gap-5 mt-6'>
          <a><FaGithub size={22} /></a>
          <a><FaLinkedinIn size={25} /></a>
          <a><FaXTwitter size={25} /></a>
        </motion.div>
        </motion.div>
      </motion.div>
      <div onClick={() => setShowMenu(!showMenu)} className='z-50'>{showMenu ? <FaTimes size={25} /> : <FaBars size={25}/>}</div>
    </div>
  )
}

export default Header