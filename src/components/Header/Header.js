import React, { useContext } from 'react';
import { LoginContext } from '../signUp/Auth';
import './Header.css'

export default function Header() {
    const context = useContext(LoginContext);
    return (
        <div className='header'>            
    <a href='/'> <h1> BookMe</h1></a>
            <nav>
                <a href='/'>Home</a>
                <a href='/cars'>Cars</a>
                <a href='/myAcount'>My Acount</a>
                <a href='/' onClick={context.logout}>Log Out</a>
            </nav>
          
        </div>
    )
}
