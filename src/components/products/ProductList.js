import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Product } from './Product'
import './products.css'



export const ProductList = ({ searchValue }) => {
    const [products, updateProducts] = useState([])
    const [filteredCandy, setFilteredCandy] = useState([])
    const [topPricedOnly, setTopPricedOnly] = useState(false)
    const [addProduct, setAddProduct] = useState([])
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            const searchedCandy = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchValue.toLowerCase())
            })
            setFilteredCandy(searchedCandy)
        },
        [searchValue]
    )
    useEffect(
        () => {
            if (topPricedOnly) {
                const topCandy = products.filter(product => product.price > 2)
                setFilteredCandy(topCandy)
            } else {
                setFilteredCandy(products)
            }
        },
        [topPricedOnly]
    )

    useEffect(
        () => {
            fetch('http://localhost:8088/products?_expand=productType')
            .then(response => response.json())
            .then((productArray) => {
                updateProducts(productArray)
            })
        },
        []
    )

    useEffect(
        () => {
            if (kandyUserObject.isStaff) {
                setFilteredCandy(products)
            } else {
                const myProducts = products.filter((product) => product.userId === kandyUserObject.id)
                setFilteredCandy(myProducts)
            }
        },
        [products]
    )

    return <>

        {
            kandyUserObject.isStaff
            ? <>

            <button onClick={ () => { setTopPricedOnly(true) }}>Top Priced</button>
            <button onClick={ () => { setTopPricedOnly(false)}}>Show All Products</button>
            <button onClick={ () => {navigate('/newCandyProduct')}}>Add Product</button>
            </>

            : <>
            <button onClick={ () => {setFilteredCandy(products)}}>All Products</button>
            </>
        }

    <h2>Products</h2>
    <article className="products">
        {
            filteredCandy.map(
                (product) => {
                    return <Product key={`product--${product.id}`} id={product.id} fullName={product.name} cost={product.price} location={product.locationId} />
            
                        
                    
                }
            )
        }

    </article>
    
    </>
    
}