import { Outlet, Route, Routes } from "react-router-dom"
import { ProductDetails } from "../product/ProductDetails"
import { CandyContainer } from "../tickets/CandyContainer"
import { CandyList } from "../tickets/CandyList"
import { LocationList } from "../tickets/LocationList"
import { LocationDetails } from "../tickets/LocationDetails"
import { CandyForm } from "../tickets/CandyOrderForm"
import { AddEmployeeForm } from "../tickets/AddEmployee"
import { AddUserForm } from "../tickets/AddUserForm"
import { CustomerDetails } from "../customers/CustomerDetails"
import { CustomerList } from "../customers/CustomerList"
import { CustomerEdit } from '../customers/CustomerEdit'


export const ProductViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get all your candy needs filled</div>

                    <Outlet />
                </>
            }>

                <Route path="products" element={ <CandyContainer/> } />
                <Route path="products/:productId" element={ <ProductDetails /> } />
                <Route path="newCandyProduct" element={<CandyForm /> } />
                <Route path="locations" element={ <LocationList /> } />
                <Route path="locations/:locationId" element={ <LocationDetails /> } />
                <Route path="newEmployees" element={ <AddEmployeeForm /> } />
                <Route path="newUsers" element={ <AddUserForm /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
				<Route path="customers" element={ <CustomerList />} />
                <Route path="customers/:customerId/edit" element={ <CustomerEdit />} />
            </Route>
        </Routes>
    )
}