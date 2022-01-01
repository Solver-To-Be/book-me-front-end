import React from 'react'
import Hero from './Hero'
import './Homepage.css'

export default function Home() {
    return (
        <div>
            <Hero />
            <section className='whyBookMe'>
                <h1>Why Book Me</h1>
            </section>
        </div>
    )
}
