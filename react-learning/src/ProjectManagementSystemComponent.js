import React from 'react';
import HeaderComponent from './HeaderComponent';
import DataTableComponent from './DataTableComponent';
import EvenOddComponent from './EvenOddComponent';
import CustomerDetailsComponent from "./CustomerDetailsComponent";

var userDetails = [{
    EmpId: 100,
    EmpName: "Sachin Gandhwani",
    EmpCompany: "Yash Technologies"
  },
  {
    EmpId: 101,
    EmpName: "Ram",
    EmpCompany: "Yash Technologies"
  },
  {
    EmpId: 102,
    EmpName: "John",
    EmpCompany: "Yash Technologies"
  },
  {
    EmpId: 104,
    EmpName: "Mohan",
    EmpCompany: "Yash Technologies"
  }
]

class ProjectManagementSystemComponent extends React.Component{
    render(){
        return (
            <div id="container">
                <HeaderComponent></HeaderComponent>

                <div id="data-table" width="800" style={{marginTop:'50px'}}>
                    <h3>Employee Details</h3>
                        <table cellPadding="4" cellSpacing="4" border="1">
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Employee Company</th>
                                </tr>
                            </thead>

                            <tbody>
                            { userDetails.map( (el, index) => { return <DataTableComponent key={el.EmpId} userEmp={el.EmpId} userEmpName={el.EmpName}></DataTableComponent> })}
                            </tbody>
                    </table>
                </div>    

                <EvenOddComponent></EvenOddComponent>

                <CustomerDetailsComponent></CustomerDetailsComponent>

            </div>

            
        )
    }
}

export default ProjectManagementSystemComponent;