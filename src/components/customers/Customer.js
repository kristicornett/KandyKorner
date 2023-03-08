import { Link } from 'react-router-dom'

export const Customer = ({ customer }) => {
    return <section className="customer" key={`customer--${customer.id}`}>
        <div>
        Name: <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
        </div>
        <div>
        Email: {customer.email}
        </div>
        
    </section>
}

