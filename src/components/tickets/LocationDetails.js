import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LocationDetails = () => {
    const {locationId} = useParams()
    const [location, updateLocation] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((data) => {
                const singleLocation = data[0]
                updateLocation(singleLocation)
            })
        },
        [locationId]
    )
    return <section className="location">
             <header className="location__header">{location.name}</header>
            <div>Location: {location.address}</div>
            <div>Square Footage: {location.squareFootage}</div>
        </section>
}