import React from 'react'
import './Search.css'
export default function Search(props) {

    function handelSearch(event) {
        event.preventDefault()
        const searchItem = event.target.search.value
        const searchResponse = props.searchCars.filter(car=> car.name.toLowerCase().includes(searchItem.toLowerCase()))
        props.setSearchCarsTow(searchResponse)
        console.log(searchResponse);
    }
    return (
        <div className='searchSection'>
            <h1 className='ss'>Find Best Car & vehicle
            </h1>
            <h2 className='ourFleet'>Our Fleet is A button Away From You</h2>
            <div class="search__container">
              
                <form onSubmit={handelSearch}>
                <input class="search__input" type="text" placeholder="  Find a car" name='search'/>
                <button class="button-33" color='white' role="button" type='submit' >Search</button>
                </form>

            </div>
           
        </div>
    )
}
