import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CustomerLoyaltyNumber } from './Customer'


export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})
    const [loyaltyNumber, updateLoyalNumber] = useState('')

   
=======
import { useParams, Link, useNavigate } from 'react-router-dom'

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, setCustomer] = useState({loyaltyNumber: ''})
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
<<<<<<< HEAD
                updateCustomer(singleCustomer)
                updateLoyalNumber(singleCustomer.loyaltyNumber)
            })
        },
        [customerId]
    )


    return <section className="customer">
        <header customer={customer} className="customer__header">{customer?.user?.name}</header>
        <div>Email: {customer?.user?.email}</div>
        <div>Loyalty Number: <input type="text" 
                                value={loyaltyNumber}
                                
                                ></input>
                <input type="button" onClick={}>Update</input>                
        </div>
        
    </section>
}
=======
                setCustomer(singleCustomer)

            })
        
},
[customerId]
    )

    const [feedback, setFeedback] = useState('')

    useEffect (
        () => {
           if (feedback !== '') {
            setTimeout(() => setFeedback(''), 3000)
           }
        },
        [feedback]
    )
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/customers/${customerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(() => {
                setFeedback('Customer Loyalty Number Updated')
                navigate('/customers')
            })
    }

    return <section className='customer'>
        <div>Name: {customer?.user?.name}</div>
        <div>Email: {customer?.user?.email}</div>
        <div>Loyalty Number: 
             <input
                required autoFocus
                type='text'
                value={customer?.loyaltyNumber}
                onChange={
                    (event) => {
                        const copy = {...customer}
                        copy.loyaltyNumber = (event.target.value)
                        setCustomer(copy)
                    }
                }></input>
                
        <button onClick={(event) => handleSaveButtonClick(event)}
        className='btn btn-primary'>Save Loyalty Number</button>
        </div>
    </section>
}
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42
