import { Outlet, Route, Routes } from 'react-router-dom'
import { LocationList } from '../location/LocationList'
import { ProductContainer } from '../products/ProductContainer'
import { ProductDetails } from '../products/ProductDetails'
import { ProductList } from '../products/ProductList'
import { ProductSearch } from '../products/ProductSearch'
import { PurchaseList } from '../customers/PurchaseList'

export const CustomerViews = () => {
    return ( 
        <Routes>
		<Route path="/" element ={
			<>
			<h1>Kandy Korner</h1>
			<div>Your one stop shop for all things Kandy!</div>

			<Outlet />
			</>
		}>

			<Route path="locations" element={<LocationList />} />
            <Route path='products/:productId' element={ <ProductDetails />} />
            <Route path="products" element={ <ProductContainer/> } />
            <Route path="orders" element={ <PurchaseList /> } />
		</Route>
	</Routes>
	
    )
}