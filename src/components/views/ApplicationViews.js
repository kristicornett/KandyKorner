import { Route, Routes } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { LocationList } from "../location/LocationList"
import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {
	const localKandyUser = localStorage.getItem('kandy_user')
	const kandyUserObject = JSON.parse(localKandyUser)

		if (kandyUserObject.isStaff) {
			return <EmployeeViews />
		} else {
			return <CustomerViews />
		}
	
}