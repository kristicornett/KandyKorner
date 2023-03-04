import { Link } from 'react-router-dom'

export const Customer = ({ customer }) => {
    return <section className="customer" key={`customer--${customer.id}`}>
        <div>
        Name: <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
        </div>
        
    </section>
}

export const CustomerLoyaltyNumber = ({ customer }) => {
    return <section className="customerLoyalty" key={`customer--${customer.id}`}>
        <div>
            Loyalty Number:<Link to={`/customers/${customer.id}`}>{customer.loyaltyNumber}</Link>
        </div>
    </section>
}
