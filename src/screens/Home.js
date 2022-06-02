import React from 'react'
import Carousel from '../components/Carousel'
import Intro from '../components/Intro'
import Clothing from '../components/Clothing'
import "../styles/Home.css"
import Pickup from '../components/Pickup'


const Home = ({ categories }) => {
    return (
        <>
            <h1>hi</h1>
            {/* <Carousel /> */}
            {/* <Intro /> */}
            {/* <Clothing categories={categories} /> */}

            <Pickup />

        </>
    )
}

export default Home