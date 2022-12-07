import React, {Fragment, useEffect, useState } from "react";


const ListProducts = () => {

const [products, setProducts] = useState([]);

const getProducts = async () => {
try {
    const response = await fetch("http://localhost:5000/products");
    const jsonData = await response.json();

    console.log(jsonData);
    setProducts(jsonData);
} catch (error) {
    console.error(error.message);
}
};

useEffect(() => {
getProducts();
});

console.log(products);

   // return <h1>List of Products</h1>;

   return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
            <thead><tr>
                <th>Product Name</th>
                <th>Description</th> 
                <th>Price</th>
                </tr></thead>

                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>Test124</td>
                        <td>2122</td>
                    </tr>
                </tbody>

            </table>
    </Fragment>
   )
}


export default ListProducts;