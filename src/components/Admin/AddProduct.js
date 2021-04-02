import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(false)

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        }
        fetch("http://localhost:5055/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.forms["form"].reset()
        })
};

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5ba34ded420c00506f3690f403da3ff8');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
           setImageURL(response.data.data.display_url);
           setImageUploaded(true)
        })
        .catch(function (error) {
            console.log(error);
        });



    }
    return (
        <div>
            <h1>Add Product</h1>
             <form name="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Product Name" ref={register} />
                <input type="number" name="price" placeholder="Product Price" ref={register} />
                <input type="number" name="weight" placeholder="Product Weight" ref={register} />
                <input type="file" onChange={handleImageUpload} />
                {
                    imageUploaded? <input type="submit" value="Submit"/> : <p>Uploading Image</p>
                }
            </form>
        </div>
    );
};

export default AddProduct;