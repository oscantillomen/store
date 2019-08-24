import React, { Component } from 'react';
import ProductInfo from '../ProductInfo/';
import Image from '../Image/';
import './index.css';   

class Box extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {
            city,
            name,
            price,
            photo,
        } = this.props.item;
        
        return(
            <div id="container">
                <div id="box">
                    <Image photo = {photo}/>
                    <ProductInfo 
                        city = {city}
                        name = {name}
                        price = {price}
                        />
                </div>
            </div>
        );
    }
}

export default Box;