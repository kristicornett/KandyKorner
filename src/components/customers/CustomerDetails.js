import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


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
        <header className="customer__header">{customer?.user?.name}</header>
        <div>Email: {customer?.user?.email}</div>
        <div>Loyalty Number: {customer.loyaltyNumber}</div>
        
    </section>
}