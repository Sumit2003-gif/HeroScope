import React from 'react'
import HomeHero from '../Components/HomeHero'
import HomeCardsSection from '../Components/HomeCardsSection'
import HomeAbout from '../Components/HomeAbout'
import HomeZodac from '../Components/HomeZodac'
import HomeService from '../Components/HomeService'
import HomeToday from '../Components/HomeToday'
import HomeClient from '../Components/HomeClient'
import ExpertSection from '../Components/ExpertSection'
import LatestNews from '../Components/LatestNews'
import StatsSection from '../Components/StatsSection'

const Home = () => {
  return (
    <div>
      <section className='mt-8 md:mt-16'>
        <HomeHero/>
      </section>
      <section>
        <HomeCardsSection/>
      </section>
      <section>
        <HomeAbout/>
      </section>
     
      <section>
        <HomeService/>
      </section>
      <section>
        <HomeToday/>
      </section>
      <section>
        <LatestNews/>
      </section>
      <section>
        <StatsSection/>
      </section>
      <section>
        <HomeClient/>
      </section>
      
    </div>
  )
}

export default Home
