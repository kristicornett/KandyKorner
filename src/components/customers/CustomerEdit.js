import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const CustomerEditLoyaltyNumber = () => {
    const [customer, updateCustomer] = useState({
        name: '',
        email: '',
        loyaltyNumber: ''
    })

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
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    const {customerId} = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?id=${customerId}`)
            .then (response => response.json())
            .then ((data) => {
                const singleCustomer = data[0]
                updateCustomer(data)
            })
        },
        [customerId]
    )
     
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

    return <form className='customerForm'>
        <h2 className='customerForm__title'>Customer Information</h2>
        <fieldset>
            <div className='form-group'>
                <label htmlFor='loyaltyNumber'>Loyalty Number</label>
                <input
                required autoFocus
                type='textbox'
                value={customer.loyaltyNumber}
                onChange={
                    (event) => {
                        const copy = {...customer}
                        copy.loyaltyNumber = (event.target.value)
                        updateCustomer(copy)
                    }
                }>{customer.loyaltyNumber}</input>
            </div>
        </fieldset>
        <button onClick={(event) => handleSaveButtonClick(event)}
        className='btn btn-primary'>Save Loyalty Number</button>
    </form>
}