import React from 'react'

export default function Search(props) {

    function handelSearch(event) {
        event.preventDefault()
        const searchItem = event.target.search.value
        const searchResponse = props.searchCars.filter(car=> car.name.toLowerCase().includes(searchItem.toLowerCase()))
        props.setSearchCars(searchResponse)
        console.log(searchResponse);
    }
    return (
        <div className='searchSection'>
            <h2 className='ourFleet'>Our Fleet is A button Away From You</h2>
            <div class="search__container">
                <p class="search__title">
                    find a car
                </p>
                <form onSubmit={handelSearch}>
                <input class="search__input" type="text" placeholder="Search" name='search'/>
                <button class="button-33" role="button" type='submit' >Search</button>
                </form>

            </div>
           
        </div>
    )
}
