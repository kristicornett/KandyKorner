export const LocationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get all your candy needs filled</div>

                    <Outlet />
                </>
            }>
                <Route path="locations" element={ <LocationList /> } />
                <Route path="locations/:locationId" element={ <LocationDetails /> } />

				
            </Route>
        </Routes>
    )
}