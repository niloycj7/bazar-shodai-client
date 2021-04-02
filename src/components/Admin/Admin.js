import { faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AddProduct from './AddProduct';
import './Admin.css'
import ManageProduct from './ManageProduct';


const Admin = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    return (
        <section id="adminSection">
            <div className="sideNav">
                <h2>Bazar Shodai</h2>
                <nav className="navBar">
                    <p><FontAwesomeIcon icon={faThLarge}/> Manage Product</p>
                    <button onClick={() => setFormSubmit(true)}><FontAwesomeIcon icon={faPlus}/> Add Product</button>
                    <button onClick={() => setFormSubmit(false)}><FontAwesomeIcon icon={faPen}/> Edit Product</button>
                </nav>
            </div>
            {
                formSubmit? 
                <AddProduct/>
                : 
                <ManageProduct/>
            }
        </section>
    );
};

export default Admin;