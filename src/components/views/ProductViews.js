import { Outlet, Route, Routes } from "react-router-dom"
import { Product } from "../products/Product"
import { ProductDetails } from "../products/ProductDetails"
import { ProductList } from '../products/ProductList'

export const ProductViews = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                <h1>Kandy Korner</h1>
                <div>Kandy Products</div>
                
                <Outlet />
                </>
            }>
                <Route path='products' element={ <Product /> } />
                <Route path='products/:productId' element={ <ProductDetails />} />
                <Route path='products' element={ <ProductList /> } />
                <Route path="products" element={ <ProductConatiner/> } />
            </Route>
        </Routes>
    )
}