import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>            
     <h1> BookMe</h1>
            <nav>
                <a href='/'>Home</a>
                <a href='/'>Cars</a>
                <a href='/'>My Account</a>
                <a href='/'>Log Out</a>
            </nav>
          
        </div>
    )
}
