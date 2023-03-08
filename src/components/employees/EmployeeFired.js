import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const EmployeeList = () => {
const [employees, setEmployees] = useState([])


const localKandyUser = localStorage.getItem('kandy_user')
const kandyUserObject = JSON.parse(localKandyUser)
const navigate = useNavigate()

const deleteButton = (event, employeeId) => {
    event.preventDefault()

            fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then((data) => {
                refreshEmployeeList()
            })
        }
    


const refreshEmployeeList = () => {
    fetch(`http://localhost:8088/employees?_expand=user`)
    .then(response => response.json())
    .then((employeeArray) => {
        setEmployees(employeeArray)
    })   

}


useEffect (
    () => {
        fetch(`http://localhost:8088/employees?_expand=user`)
        .then(response => response.json())
        .then((employeeArray) => {
            setEmployees(employeeArray)
        })   
    },
    []
)

    return <>
    <h2>Employees</h2>
    <article className="employees">
        {
            employees.map(
                (employee) => {
                    return <section key={`employee--${employee.id}`} className="employee">
                        <div>{employee?.user?.name} {employee?.user?.email} {employee.payRate}.</div>
                        <button onClick={clickEvent => deleteButton(clickEvent, employee.id)} className='btn btn-primary'>FIRE</button>
                    </section>
                }
            )
        }
    </article>
    </>
    
}



