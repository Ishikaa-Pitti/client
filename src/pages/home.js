import React from 'react'

import Slider from '../components/home/slider'
import TurnScrapIntoCash from '../components/home/TurnScrapIntoCash'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import FaqDiv from '../components/home/FaqDiv'
import FeaturesDiv from '../components/home/FeaturesDiv'
import TypesofScrap from '../components/home/TypesofScrap'
import JoinRecyclerDiv from '../components/home/JoinRecyclerDiv'
import ScheduleDiv from '../components/home/ScheduleDiv'
import WhyChooseUsDiv from '../components/home/WhyChooseUsDiv'
import FloatBox from '../components/home/FloatBox'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <TurnScrapIntoCash />
      <JoinRecyclerDiv />
      <ScheduleDiv />
      <WhyChooseUsDiv />
      <FeaturesDiv />
      <FaqDiv />
      <FloatBox />
      <Footer />
    </div>
  )
}

export default Home
