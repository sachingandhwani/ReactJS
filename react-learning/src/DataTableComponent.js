import React from 'react';


class DatatableComponent extends React.Component{
    render(){
        return(
            
            <tr>
                <td>{this.props.userEmp}</td>
                <td>{this.props.userEmpName}</td>
                <td>{this.props.userEmpCompany}</td>
            </tr>
        )
    }
}

DatatableComponent.defaultProps = {userEmpCompany:'Yash Tech'}

export default DatatableComponent;