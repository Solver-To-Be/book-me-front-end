import React from 'react'
import Hero from './Hero'
import './css/Homepage.css'
import Whyus from './Whyus'
import BestOffers from './BestOffers'
import Whoare from './Whoare'
import Cur from './Cur'
import Footer from '../Footer/Footer'

export default function Home() {
    
    return (
        <div>
            <Hero />
            <Cur />
           <Whyus />
           <BestOffers/>
           <Whoare/>
           <Footer/>
        </div>
    )
}
