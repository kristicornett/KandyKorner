import { useEffect, useState } from 'react'
import './location.css'


export const LocationList = () => {
    const [locations, updateLocations] = useState([])

    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/locations')
            .then(response => response.json())
            .then((locationArray) => {
                updateLocations(locationArray)
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