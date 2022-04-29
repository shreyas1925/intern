import React, { useState } from 'react'

const Map = () => {

    const [cuisine, setCuisine] = useState('cuisine');
    const [restaurant, setRestaurent] = useState('');
    const [search, setSearch] = useState('Search');

    const searchfun = () => {
        setSearch("Fetching location...")

        navigator.geolocation.getCurrentPosition((pos) => {

            setSearch("Fetching restaurants...")

            var lat = pos.coords.latitude;
            var long = pos.coords.longitude;

            var url = ``
        })
    }
    return (
        <>
            <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />

            <input type="btn" value={search} onClick={searchfun} />


        </>
    )
}

export default Map