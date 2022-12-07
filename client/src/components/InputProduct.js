import React, { Fragment, useState } from "react";

const InputProduct = () => {
    return (
        { /*<!--  <h1>Praise be to LORD!</h1> --> */ }

    )
}

const InputProducts = () => {

    const [productname, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPriceValue] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();

        try {

            const body = { productname, description, price };
            const response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
            console.log(response);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Praise be to LORD</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={productname}
                    onChange={e => setProductName(e.target.value)} />
                <input type="text" className="form-control" value={description}
                    onChange={e => setDescription(e.target.value)} />
                <input type="text" className="form-control" value={price}
                    onChange={e => setPriceValue(e.target.value)} />
                <button className="btn btn-success">Add Product</button>
            </form>
        </Fragment>
    )
}


export default InputProducts;
