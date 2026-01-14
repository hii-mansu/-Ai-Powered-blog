import React from 'react'
import  Navbar  from '../components/global/Navbar'
import  Hero  from '../components/home/Hero'
import PopularPosts from '../components/home/PopularPosts'
import NewsLetter from '../components/home/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero />
        <PopularPosts />
        <NewsLetter />
    </div>
  )
}

export default Home