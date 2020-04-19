import React from 'react';

class BadgeComponent extends React.Component{
    render(){
        return(
            <div>
                <p><img src={this.props.user.logoImg}></img></p>
                <h1>Name: {this.props.user.name}</h1>
                <h3>User Name: {this.props.user.userName}</h3>
            </div>
            
        )
    }
}

export default BadgeComponent;