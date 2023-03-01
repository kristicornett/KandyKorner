import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LocationList } from '../tickets/LocationList'

export const ProductDetails = () => {
    const {productId} = useParams()
    const [product, updateProduct] = useState({})
    const [location, updateLocation] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType&id=${productId}`)
            .then(response => response.json())
            .then((data) => {
                const singleProduct = data[0]
                updateProduct(singleProduct)
            })
        },
        [productId]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations?id=${product.locationId}`)
            .then(response => response.json())
            .then((data) => {
                const singleLocation = data[0]
                updateLocation(singleLocation)
            })
        },
        [product]
    )
    
    return <section className="product">
        <header className="product__header">{product.fullName}</header>
        <div>Type: {product?.productType?.productType}</div>
        <div>Location: {location?.name}</div>
    </section>
}