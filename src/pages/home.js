import React from 'react'

import Slider from '../components/home/slider'
import TurnScrapIntoCash from '../components/home/TurnScrapIntoCash'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <TurnScrapIntoCash />
      <Footer />
    </div>
  )
}

export default Home
