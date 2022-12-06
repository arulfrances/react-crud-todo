import React, { Fragment } from "react";

const InputProduct = () => {
    return (
        <h1>Praise be to LORD!</h1>
    )
}

const InputProducts = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-5">Praise be to LORD</h1>
            <form className="d-flex mt-5">
                <input type="text" className="form-control" />
                <input type="text" className="form-control1" />
                <input type="text" className="form-control2" />
                <button className="btn btn-success">Add Product</button>
            </form>
        </Fragment>
    )
}

export default InputProducts;
