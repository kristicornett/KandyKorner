<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/newUsers">New Users</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/newEmployees">New Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            {
                localStorage.getItem("kandy_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("kandy_user")
                        navigate('/', {replace: true})
                    }}>Logout</Link>
                    </li>
                    : ""
                }
                </ul>
    )
=======
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
    
    const localKandyUser = localStorage.getItem('kandy_user')
    const localKandyObject = JSON.parse(localKandyUser)

    if (localKandyObject.isStaff) {
        return <EmployeeNav />
    } else {
        return <CustomerNav />
    }

    
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42
    
}

