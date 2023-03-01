import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddEmployeeForm = () => {
    //add correct default properties to intial state object
    const [employees, setEmployee] = useState([])
    const [locations, setLocations] = useState([])
    const [users, setUsers] = useState([])

    const [addEmployeeForm, setAddEmployeeForm] = useState({
            name: '',
            locationId: 0,
            startDate: '',
            payRate: '',
            userId: 0
    })

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/employees')
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployee(employeeArray)
            })
            
        },
        []
    )

    useEffect(
        () => {
            fetch('http://localhost:8088/users?isStaff=true')
            .then(response => response.json())
            .then((userArray) => {
                setUsers(userArray)
            })
            
        },
        []
    )

    useEffect(
        () => {
            fetch('http://localhost:8088/locations')
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
            
        },
        []
    )
    
    const handleSaveButtonClickEmployee = (event) => {
        event.preventDefault()

        const employeeToSendToAPI = {
            userId: kandyUserObject.id,
            name: addEmployeeForm.name,
            startDate: addEmployeeForm.startDate,
            location: addEmployeeForm.locationId
        }

        return fetch('http://localhost:8088/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate('/employees')
            })
        
    }

    return (
        <form className="addEmployeeForm">
            <h2 className="addEmployeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                <select
                    required>
                    <option>Choose Employee</option>

                {
                    users.map(
                        (user) => {
                            return <option value={user.id}>{user.name}</option>
                           
                        }
                    )
                }
                    </select>

                    <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Start Date"
                    value={addEmployeeForm.startDate}
                    onChange={
                        (event) => {
                            const copy = {...addEmployeeForm}
                            copy.startDate = event.target.value
                            setAddEmployeeForm(copy)
                        }
                    } />
                    
                    <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Pay Rate"
                    value={addEmployeeForm.payRate}
                    onChange={
                        (event) => {
                            const copy = {...addEmployeeForm}
                            copy.payRate = event.target.value
                            setAddEmployeeForm(copy)
                        }
                    } />
                    <select
                    required>
                    <option>Choose Location</option>

                {
                    locations.map(
                        (location) => {
                            return <option value={location.id}>{location.name}</option>
                           
                        }
                    )
                }
                    </select>
                    
        
                
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClickEmployee(clickEvent)}
            className="btn btn-primary">
            Submit Employee
            </button>
        </form>
    )
    
}



