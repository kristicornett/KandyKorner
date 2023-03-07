import { Outlet, Route, Routes } from 'react-router-dom'
import { LocationList } from '../location/LocationList'
import { Product } from '../products/Product'
import { ProductDetails } from '../products/ProductDetails'
import { ProductList } from '../products/ProductList'
import { ProductForm } from '../products/ProductForm'
import { AddEmployee } from '../auth/AddEmployee'
import { CustomerList } from '../customers/CustomerList'
import { CustomerDetails } from '../customers/CustomerDetails'
import { EmployeeList } from '../employees/EmployeeFired'



export const EmployeeViews = () => {
    return (
        <Routes>
		<Route path="/" element ={
			<>
			<h1>Kandy Korner</h1>
			<div></div>

			<Outlet />
			</>
		}>

			<Route path="locations" element={<LocationList />} />
            
            <Route path='products/:productId' element={ <ProductDetails />} />
            <Route path='products' element={ <ProductList /> } />
            <Route path="newCandyProduct" element={<ProductForm /> } />
            <Route path='newEmployee' element={ <AddEmployee /> } />
            <Route path='customers' element={ <CustomerList /> } />
            <Route path='customers/:customerId' element={ <CustomerDetails /> } />
            <Route path='employees' element={ <EmployeeList /> } />
            
            
		</Route>
	</Routes>
	)
    
}