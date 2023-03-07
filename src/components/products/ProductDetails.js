import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export const ProductDetails = () => {
    const {productId} = useParams()
    const [product, updateProduct] = useState({})
    const [location, updateLocations] = useState({})
    const [productAmount, updateProductAmount] = useState(0)

    const [addNewPurchase, setNewPurchase] = useState({
        
        customerId: 0,
        productId: 0,
        productAmount: 0,
     
    })

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

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
                updateLocations(singleLocation)
            })
        },
        [product]
    )
    const handleSaveButtonClickPurchase = (event) => {
        event.preventDefault()

        const purchaseToSendToAPI = {
            customerId: kandyUserObject.id,
            productId: product.id,
            productPrice: product.price, 
            productAmount: productAmount,
            
        }

        return fetch('http://localhost:8088/purchases', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(purchaseToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/purchases')
            })
    }

    return <section className='product'>
        <header className='product__header'>Price: ${product.price}</header>
        <div>Type: {product?.productType?.productType}</div>
        <div>Location: {location?.name}</div>
        <button onClick={(event) => handleSaveButtonClickPurchase(event)}
        className='btn btn-primary'>Purchase</button>
         <input
            name="Number of Products"
            type="number"
            value={productAmount}
            onChange={
                (event) => {
                    
                    updateProductAmount(event.target.value)
                }
            }></input>

    </section>
}