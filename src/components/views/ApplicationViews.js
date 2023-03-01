
import { ProductViews } from "./ProductViews"

export const ApplicationViews = () => {
	const localKandyUser = localStorage.getItem('kandy_user')
	const kandyUserObject = JSON.parse(localKandyUser)

	if (kandyUserObject) {
		return <ProductViews />

	
	}
	
}