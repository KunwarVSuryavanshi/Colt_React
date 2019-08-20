import React, { Component } from 'react';
class coin extends Component{
    render(){
        return(
            <img src={this.props.info.url} alt={this.props.info.side}/>
        );
    }
}
export default coin;