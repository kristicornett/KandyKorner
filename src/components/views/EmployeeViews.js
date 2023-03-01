import { Outlet, Route, Routes } from "react-router-dom"

import { CandyContainer } from "../tickets/TicketContainer"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Corner</h1>
                    <div>Your one-stop-shop to get all your candy needs filled</div>

                    <Outlet />
                </>
            }>

                <Route path="products" element={ <CandyContainer /> } />
                
				
            </Route>
        </Routes>
    )
}