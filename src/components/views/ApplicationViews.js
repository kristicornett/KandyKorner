<<<<<<< HEAD

import { ProductViews } from "./ProductViews"
=======
import { Route, Routes } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { LocationList } from "../location/LocationList"
import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42

export const ApplicationViews = () => {
	const localKandyUser = localStorage.getItem('kandy_user')
	const kandyUserObject = JSON.parse(localKandyUser)

<<<<<<< HEAD
	if (kandyUserObject) {
		return <ProductViews />

	
	}
=======
		if (kandyUserObject.isStaff) {
			return <EmployeeViews />
		} else {
			return <CustomerViews />
		}
>>>>>>> 1aeb1625a73499e2defcdb51fb827fb52c1cda42
	
}