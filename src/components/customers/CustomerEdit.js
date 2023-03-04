import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"


export const CustomerEdit = () => {
    // TODO: This state object should not be blank
    const [customer, updateCustomer] = useState({
        userId: '',
        loyaltyNumber: ''
    })

    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        if (feedback !== "") {
         setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)


    // TODO: What is the variable in which you stored the route parameter?
    const { customerId } = useParams()

    // TODO: Get the ticket state from the API.

    useEffect(() => {
        fetch(`http://localhost:8088/customers?id=${customerId}`)
        .then(response => response.json())
        .then((data) => {
            const customerObject = data[0]
            updateCustomer(customerObject)
        })
    }, [customerId])
   

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/customers/${customerId}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(() => {
            setFeedback('Loyalty has successfully been saved')
            navigate('/customers')
        })
            }

    return <form className="ticketForm">
        <h2 className="ticketForm__title">Loyalty Number</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={customer.loyaltyNumber}
                    onChange={
                        (evt) => {
                            const copy = {...customer}
                            copy.description = (evt.target.value) 
                            updateCustomer(copy)
                            // TODO: Update state with a modified copy
                        }
                    }>{customer.loyaltyNumber}</textarea>
            </div>
        </fieldset>
      
        <button
            onClick={(e) => handleSaveButtonClick(e)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}