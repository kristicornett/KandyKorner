import { useEffect, useState } from 'react'

import './locations.css'

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/locations')
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
            
        },
        []
    )
    return <>
    <h2>Locations</h2>
    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section key={`location--${location.id}`} className="location">
                        <div>{location.name} {location.address} which is {location.squareFootage} square feet.</div>
                        
                    </section>
                }
            )
        }

    </article>
    
    </>
}

