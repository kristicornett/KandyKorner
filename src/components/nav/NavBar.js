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

    
    
}

