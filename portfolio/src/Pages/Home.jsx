import React from 'react'
import Hero from '../Components/Hero'
import Technologies from '../Components/Technologies'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
      <section id='home'><Hero /></section>
      <section id='technologies'><Technologies/></section>
      <section id='contact'><Contact /></section>
      <section></section>
    </div>
  )
}

export default Home