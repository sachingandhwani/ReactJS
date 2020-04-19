import React from 'react';
import ShowActiveCustomerComponent  from './ShowActiveCustomerComponent';

var customerDetails = [{
    cusId: 100,
    cusName: "Sachin Gandhwani",
    cusAddress: "America"
  },
  {
    cusId: 101,
    cusName: "Ankit Sharma",
    cusAddress: "India"
  },
  {
    cusId: 102,
    cusName: "Abhishek Joshi",
    cusAddress: "India"
  },
  {
    cusId: 103,
    cusName: "Rohan Saraf",
    cusAddress: "Australia"
  },
  {
    cusId: 104,
    cusName: "Amit",
    cusAddress: "India"
  },
  {
    cusId: 105,
    cusName: "Gaurav Patidar",
    cusAddress: "India"
  },
  {
    cusId: 106,
    cusName: "Akash Gupta",
    cusAddress: "India"
  }
  
]

class CustomerDetailsComponent extends React.Component{
    render(){
        
        return(
          <div>
          <h1>Customer Details</h1>
          <ShowActiveCustomerComponent customerList={customerDetails}></ShowActiveCustomerComponent>

       
          </div>
            
        )
    }
}

export default CustomerDetailsComponent;