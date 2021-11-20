import { useEffect, useState } from "react"
import employeeServices from "../services/employeeServices"


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
        <div>
            <h3>Members</h3>
            <div>
                <table border = "1">
                    <tr>
                        <td>Name</td>
                        <td>Nickname</td>
                        <td>Instrument</td>
                    </tr>
                     {
                         employees.map(
                            employee => (
                                <tr>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                </tr>
                            )
                         )
                     }
                </table>
            </div>
        </div>
    )
}

export default Employee