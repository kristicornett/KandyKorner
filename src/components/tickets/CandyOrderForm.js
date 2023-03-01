import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const CandyForm = () => {
    //add correct default properties to intial state object
    const [candy, setCandyForm] = useState([])
    const [productTypes, setProductTypes] = useState([])

    const [formCandy, setFormCandy] = useState({
            name: '',
            productTypeId: '',
            price: ''
    })

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/productTypes')
            .then(response => response.json())
            .then((productArray) => {
                setProductTypes(productArray)
            })
            
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const candyToSendToAPI = {
            userId: kandyUserObject.id,
            name: formCandy.name,
            productTypeId: formCandy.productTypeId,
            price: formCandy.price
        }

        return fetch('http://localhost:8088/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candyToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/products')
            })
        
    }

    return (
        
        <form key={candy.id} className="candyForm">
            <h2 className="candyForm__title">New Candy Order</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Candy type"
                    value={formCandy.name}
                    onChange={
                        (event) => {
                            const copy = {...formCandy}
                            copy.name = event.target.value
                            setFormCandy(copy)
                        }
                    } />

                    <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Candy price"
                    value={formCandy.price}
                    onChange={
                        (event) => {
                            const copy = {...formCandy}
                            copy.price = event.target.value
                            setFormCandy(copy)
                        }
                    } />
                    <select
                    required>
                    <option>Choose Option</option>

                {
                    productTypes.map(
                        (productType) => {
                            return <option value={productType.id}>{productType.productType}</option>
                           
                        }
                    )
                }
                    </select>
                    
        
                
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit Candy
            </button>
        </form>
    )
    
}




