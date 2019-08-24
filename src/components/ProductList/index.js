import React, { Component } from 'react';
import Box from '../Box/';
import './index.css';   

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfPages: null, 
            currentPage: null, 
            isLastPage: null,
            items: [],
        }
    }

    componentDidMount() {
        this.getProducts();
    }
    
    getProducts = async () =>{
        const response = await fetch('https://limitless-beyond-13402.herokuapp.com/products');
        const products = await response.json();
        const { numberOfPages, currentPage, isLastPage, items } = products;
        this.setState({ numberOfPages, currentPage, isLastPage, items });
    }

    render(){
        return(
            <div id="container">
                <div id="box">
                    {
                        this.state.items.map(item => <Box item = {item}/>)
                    }
                </div>
            </div>
        );
    }
}

export default ProductList;