import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Intro from '../components/Intro'
import Clothing from '../components/Clothing'

import "../styles/Home.css"

const Home = () => {
    return (
        <>
            <Header />
            <Carousel />
            <Intro />
            <Clothing />
            <div className="offer_banner">
                <img src="/images/banner.jpg" alt="" />
            </div>

            <div className="mobile">
                <div>
                    <img src="/images/mobile.png" alt="" />
                </div>
                <div>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum autem facilis. Expedita voluptas ad quo?</p>
                    <button>connect</button>
                </div>
            </div>

            <footer>Copyright @2022</footer>
        </>
    )
}

export default Home