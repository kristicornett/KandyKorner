import { Link } from 'react-router-dom'
<<<<<<< HEAD

export const Customer = ({ customer }) => {
    return <section className="customer" key={`customer--${customer.id}`}>
        <div>
        Name: <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
        </div>
        <div>
        Email: {customer.email}
=======
export const Customer = ({ customer }) => {
    return <section className="customer" key={`customer--${customer.id}`}>
        <div>
        Name: <Link key={customer.id} to={`/customers/${customer.id}`}>{customer.name}</Link>
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42
        </div>
        
    </section>
}

