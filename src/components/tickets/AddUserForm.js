import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddUserForm = () => {
    //add correct default properties to intial state object
    const [user, setUser] = useState([])

    const [addUserForm, setAddUserForm] = useState({
            name: '',
            email: '',
            isStaff: false
    })

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/users')
            .then(response => response.json())
            .then((userArray) => {
                setUser(userArray)
            })
            
        },
        []
    )


    
    const handleSaveButtonClickUser = (event) => {
        event.preventDefault()

        const userToSendToAPI = {
            name: addUserForm.name,
            email: addUserForm.email,
            isStaff: addUserForm.isStaff
        }

        return fetch('http://localhost:8088/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/users')
            })
        
    }

    return (
        <form className="adduserForm">
            <h2 className="adduserForm__title">New User</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    value={addUserForm.name}
                    onChange={
                        (event) => {
                            const copy = {...addUserForm}
                            copy.name = event.target.value
                            setAddUserForm(copy)
                        }
                    } />

                    <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={addUserForm.email}
                    onChange={
                        (event) => {
                            const copy = {...addUserForm}
                            copy.email = event.target.value
                            setAddUserForm(copy)
                        }
                    } />

                    <label
                    htmlFor="isStaff"
                    >Is Staff?</label>
                    
                    <input
                    required
                    name="isStaff"
                    type="checkbox"
                    className="form-control"
                    placeholder="Is staff"
                    checked={addUserForm.isStaff}
                    onChange={
                        (event) => {
                            const copy = {...addUserForm}
                            copy.isStaff = event.target.checked
                            setAddUserForm(copy)
                        }
                    } />

                   
                    
        
                
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClickUser(clickEvent)}
            className="btn btn-primary">
            Submit User
            </button>
        </form>
    )
    
}



