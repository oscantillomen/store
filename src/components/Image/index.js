import React, { Component } from 'react';
import './index.css';

class Image extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img src={this.props.photo} alt=""/>
        );
    }
}

export default Image;
