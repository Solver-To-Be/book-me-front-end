import React, { Component } from 'react'
import './Header.css'


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,

        };
    }

    changeBackroung = () => {
        window.scrollY > 0
            ? this.setState({
                scrolling: true,
            })
            : this.setState({
                scrolling: false,
            });};

        componentDidMount = () => {
            window.addEventListener("scroll", this.changeBackroung);
        };
    
    render() {
        return (
            <div className={this.state.scrolling ? "header_active" : "header"}>
                <a href='/'> <h1> BookMe</h1></a>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/cars'>Cars</a>
                    <a href='/myAcount'>My Acount</a>
                    <a href='/'>Log Out</a>
                </nav>

            </div>
        )
    }
}

export default Header

