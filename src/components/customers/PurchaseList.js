import { useState, useEffect } from 'react'
import './Purchase.css'

export const PurchaseList = ({}) => {
   
    const [purchases, setPurchases] = useState([])
    

    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/purchases?_expand=product&customerId=${kandyUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                
                setPurchases(data)
            })
        
},
[]
    )

    return <>
    <h2>Purchases</h2>
    <article className="purchases">
        {
            purchases.map(
                (purchase) => {
                    return <section key={`purchase--${purchase.id}`} className="purchase">
                        <div>{purchase.productAmount} {purchase?.product?.name} <br />cost: ${(purchase?.product.price * purchase.productAmount)}.</div>
                    </section>
                }
            )
        }
    </article>
    </>
}