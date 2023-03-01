import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Candy.css'
import { Product } from '../product/Product'
import './locations.css'


export const CandyList = ({ searchTermState }) => {
    const [candy, setCandy] = useState([])
    const [filteredCandy, setFilteredCandy] = useState([])
    const [topPricedOnly, setTopPriceOnly] = useState(false)
    const [addCandy, setAddCandy] = useState([])
    const navigate = useNavigate()
    
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            const searchedCandy = candy.filter(candy => {
                return candy.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFilteredCandy(searchedCandy)
        },
        [ searchTermState ]
    )

    const showTopPricedProduct = (isShown) => {
        if (isShown) {
            const topCandy = candy.filter(candy => candy.price > 2)
            setFilteredCandy(topCandy)
        } else {
            setFilteredCandy(candy)
        }
    }
    
    useEffect(
        () => {
            if (topPricedOnly){
                const topCandy = candy.filter(candy => candy.price > 2)
                setFilteredCandy(topCandy)
            } else {
                setFilteredCandy(candy)
            }
        },
        [topPricedOnly]
    )
    
    
    
    useEffect(
        () => {
            fetch('http://localhost:8088/products?_expand=productType')
            .then(response => response.json())
            .then((candyArray) => {
                setCandy(candyArray)
            })
            
        },
        []
    )

    useEffect(
        () => {
            if(kandyUserObject.isStaff){
                setFilteredCandy(candy)
            } else {
                const myCandy = candy.filter(candy => candy.userId === kandyUserObject.id)
                setFilteredCandy(myCandy)
            }
        },
        [candy]
    )

    return <>
        { 
           
            kandyUserObject.isStaff
            ? <>
            
              
             <button onClick={ () => { setTopPriceOnly(true) }}>Top Priced</button>
             <button onClick={ () => { setTopPriceOnly(false)}}>Show All</button>
             <button onClick={ () => {navigate('/newCandyProduct')} }>Add Product</button>
            </>
               
            :<>
            
            <button onClick={ () => { setFilteredCandy(candy) }}>All Products</button>
            </>
           }
        
        


    <h2>Products</h2>
    

    <h3>Candy Products</h3>
    <article className="products">
        {
            filteredCandy.map(
                (candy) => {
                    return <Product key={`product--${candy.id}`} id={candy.id} fullName={candy.name} cost={candy.price} location={candy.locationId} />
            
                        
                    
                }
            )
        }

    </article>
    
    </>
}
