import React from 'react'
import Hero from './Hero'
import './css/Homepage.css'
import Whyus from './Whyus'
import BestOffers from './BestOffers'
import Whoare from './Whoare'
export default function Home() {
    return (
        <div>
            <Hero />
           <Whyus />
           <BestOffers/>
           <Whoare/>
        </div>
    )
}
