import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CustomerLoyaltyNumber } from './Customer'


export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomers] = useState({})
   

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomers(singleCustomer)
            })
        },
        [customerId]
    )

    
    

    return <section className="customer">
        <header customer={customer} className="customer__header">{customer?.user?.name}</header>
        <div>Email: {customer?.user?.email}</div>
        <div>Loyalty Number: {CustomerLoyaltyNumber()} {customer.loyaltyNumber} /></div>
        
    </section>
}