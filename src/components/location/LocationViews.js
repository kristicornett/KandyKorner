import { Outlet } from "react-router-dom";
import { LocationList } from "./LocationList";

export const LocationViews = () => {
    return (
        <Routes>
            <Route path="/" element ={
                <>
                <h1>Kandy Korner</h1>
                <div>Kandy Korner Locations</div>

                <Outlet />
                </>
            }>

                <Route path="locations" element={<LocationList />} />
            </Route>
        </Routes>
    )
}