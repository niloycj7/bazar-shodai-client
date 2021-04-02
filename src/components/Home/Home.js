import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SingleProduct from './SingleProduct';
import "./Home.css"

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://warm-mountain-71140.herokuapp.com/getProducts")
        .then(response =>response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="products">
            {products.map(product => <SingleProduct key={product._id} product={product} />)}
        </div>
    );
};

export default Home;