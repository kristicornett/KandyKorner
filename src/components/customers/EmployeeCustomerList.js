import { useEffect, useState } from "react"
import { CustomerLoyaltyNumber } from './Customer'
import './Customer.css'

export const CustomerLoyaltyNumber = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:8088/users?isStaff=false')
                .then(response => response.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    return <article className="customer">
        {
            customers.map(customer => {
                return <CustomerLoyaltyNumber customer={customer} />

            })
        }
    
    </article>

}
