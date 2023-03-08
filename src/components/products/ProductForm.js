import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductForm = () => {
    const [product, setProduct] = useState([])
    const [productTypes, setProductTypes] = useState([])

    const [productForm, setProductForm] = useState({
        name: '',
        productTypeId: '',
        price: ''
    })

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productArray) => {
                setProductTypes(productArray)
            })
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSendToAPI = {
            userId: kandyUserObject.userId,
            name: productForm.name,
            productTypeId: productForm.productTypeId,
            price: productForm.price
        }

        return fetch('http://localhost:8088/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/products')
            })
    }

    return (
        <form key={product.id} className='productForm'>
            <h2 className='productForm__title'>New Product</h2>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                    required autoFocus
                    type='text'
                    className='form-control'
                    placeholder='Product Type'
                    value={productForm.name}
                    onChange={
                        (event) => {
                            const copy = {...productForm}
                            copy.name = event.target.value
                            setProductForm(copy)
                        }
                    } />

                    <input
                    required
                    type="text"
                    className='form-control'
                    placeholder='Product Price'
                    value={productForm.price}
                    onChange={
                        (event) => {
                            const copy = {...productForm}
                            copy.price = event.target.value
                            setProductForm(copy)
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
            className='btn btn-primary'>
                Submit Product
            </button>
            
        </form>
    )
}