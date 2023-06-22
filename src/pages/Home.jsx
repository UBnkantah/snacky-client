import React from 'react'
import HomeHero from '../components/HomeComponents/HomeHero'
import HomeFt from '../components/HomeComponents/HomeFt'
import HomeSna from '../components/HomeComponents/HomeSna'
import HomeFavPizza from '../components/HomeComponents/HomeFavPizza'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeFt />
      <HomeSna />
      <HomeFavPizza />
    </div>
  )
}

export default Home