<<<<<<< HEAD
import { useEffect, useState } from "react"
=======
import { useEffect, useState } from 'react'
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42
import { Customer } from './Customer'
import './Customer.css'

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:8088/users?isStaff=false')
<<<<<<< HEAD
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
                return <Customer customer={customer} />

            })
        }
    
    </article>

=======
            .then(response => response.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )

    return <article className='customers'>
        {
            customers.map(customer => {
                return <Customer key={customer.id} customer={customer} />
            })
        }
    </article>
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42
}
