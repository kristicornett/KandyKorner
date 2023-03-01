import { Link } from 'react-router-dom'

export const Product = ({ id, fullName, location }) => {
    return <section className="product" >
        <div>
            Name:<Link to={`/products/${id}`}>{fullName}</Link>
        </div>
    </section>
}