import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Mobility Administrator</title>
        <meta
          property="og:title"
          content="International Mobility Administrator"
        />
      </Helmet>
    </div>
  )
}

export default Home
