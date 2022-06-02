// import React, { useState } from 'react'

// const Restaurants = () => {

//     const [cuisine, setCuisine] = useState('');
//     const [restaurant, setRestaurant] = useState('');
//     const [search, setSearch] = useState('Search');

//     const searchfun = () => {
//         setSearch("Fetching location...")

//         navigator.geolocation.getCurrentPosition((pos) => {

//             setSearch("Fetching restaurants...")
//             var lat = pos.coords.latitude;
//             var long = pos.coords.longitude;
//             var url = `https://developers.zomato.com/api/v2.1/search?start=0&count=10&lat=${lat}&long=${long}&radius=5000000&cuisine=${cuisine}`;

//         })
//     }
//     return (
//         <>
//             <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
//             <input type="button" value={search} onClick={searchfun} />
//         </>
//     )
// }

// export default Restaurants