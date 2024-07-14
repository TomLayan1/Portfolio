import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  
  return (
    <div className='bg-bgColor w-full px-8 lg:px-32 py-16 text-[14px] text-orange-500'>
      <div className='flex items-start gap-14 *:'>
        <div className='flex flex-col gap-4 mb-6'>
          <p>Home</p>
          <p>My Work</p>
          <p>My Résumé</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='flex items-center gap-2'><FaGithub /> Github</p>
          <p className='flex items-center gap-2'><FaLinkedinIn /> LinkedIn</p>
          <p className='flex items-center gap-2'><FaXTwitter />X</p>
        </div>
      </div>
      <hr className='border-0 border-t border-orange-500 mb-6'/>
      <p className='text-center'>&#169; Copyright Tomisin 2024</p>
    </div>
  )
}

export default Footer