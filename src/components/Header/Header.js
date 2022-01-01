import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header'> 
        <div className='headerBackground'></div>           
            <img src="/home/ahmad/book-me-front-end/src/components/Header/book-me-logo.PNG" alt='logo' />
            <nav>
                <a href='/'>Home</a>
                <a href='/'>Cars</a>
                <a href='/myAcount'>My Acount</a>
                <a href='/'>Log Out</a>
            </nav>
            <br/>
        </div>
    )
}
