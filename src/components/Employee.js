import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeServices from "../services/employeeServices"
import background from '../imports/background3.jpg';


const Employee = () => {
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            employeeServices.getEmployees()
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                () => {
                    console.log("sorry it stopped working. godbless")
                }
            )
        }
    )

    return(
        <div style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>
        <div>
            &nbsp; 
            <h2 class="fw-bold">Members</h2>
            <div className="container">
                <table className="table" border = "1" >
                    <thead className="table table-dark">
                    <tr>
                        <td class="fw-bold">Name</td>
                        <td class="fw-bold">Nickname</td>
                        <td class="fw-bold">Instrument</td>
                        <td class="fw-bold">Action</td>
                    </tr>
                    </thead>
                     {
                         employees.map(
                            employee => (
                                <tbody>
                                <tr className="table-light" key={employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                    </td>
                                </tr>
                                </tbody>
                            )
                         )
                     }
                </table>
            </div>
        </div>
        </div>
    )
}

export default Employee