import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    })


    const API_KEY = `${process.env.REACT_APP_SECRET_KEY}`
    console.log(API_KEY);

    return (
        <>
            <ReactMapGL
                mapStyle="mapbox://styles/shreyas19/cl2mwvhj8004k14n5kdvie7el"
                mapboxAccessToken={API_KEY}
                {...viewport}
                onViewportChange={(nextviewport) => setViewPort(nextviewport)}
            ></ReactMapGL>
        </>
    )
}

export default Map