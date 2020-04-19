import React from 'react';

class ShowEvenOddComponent extends React.Component{
    render(){
        var evenNum = [];
        var oddNum = [];
        this.props.numList.map( (num) => {
            if(num % 2 == 0){
               evenNum.push(num)
            }else {
               oddNum.push(num)
            }
       }
          
       )
        return(
            <div>
                <h4>Even Numbers: {evenNum + ' '}</h4>
                <h4>Odd Numbers: {oddNum + ' '}</h4>
            </div>
        )
    }
}

export default ShowEvenOddComponent;