import React from 'react';
import ShowEvenOddComponent from './ShowEvenOddComponent';



class EvenOddComponent extends React.Component{
    render(){
        let chkNumbers = [12,15,7,5,23,34,78,17,3,10];
        return(
            <div>
                <h2>Get Even Odd Number from the list: {chkNumbers + ' '}</h2>
                <ShowEvenOddComponent numList={chkNumbers}></ShowEvenOddComponent>
            </div>
           
        )
    }
}

export default EvenOddComponent;