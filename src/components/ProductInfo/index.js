import React, { Component } from 'react';
import './index.css';

class ProductInfo extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {
            city,
            name,
            price,
        } = this.props;
        return(
            <div id="info">
                <span id="city">{city}</span>
                <span id="name">{name}</span>
                <span>Desde COP ${price}</span>
            </div>
        );
    }
}

export default ProductInfo;