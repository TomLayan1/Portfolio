import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div className='w-full'>
      <section id='home'><Hero /></section>
      <section id='about'><About /></section>
      <section id='contact'><Contact /></section>
    </div>
  )
}

export default Home