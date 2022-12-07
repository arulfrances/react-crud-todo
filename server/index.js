const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


//routes
//create productName

app.post("/productname", async (req, res) => {
    try {
        console.log(req.body);
        const { productName } = req.body;

        const newProductName = await pool.query("INSERT INTO producttable (productname) VALUES ($1) RETURNING *",
            [productName]);

        res.json(newProductName.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
});


//create a product
app.post("/products", async (req, res) => {
    try {
        console.log(req.body);
        const { productname, description, price } = req.body;

        const newProduct = await pool.query("INSERT INTO producttable ( productname, description, price) VALUES ($1,$2,$3) RETURNING *",
            [productname, description, price]);

        res.json(newProduct.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
});


//get all products

app.get("/products", async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * from producttable");
        res.json(allProducts.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get a product

app.get("/product/:id", async (req, res) => {
    try {
        //console.log(req.params);
        const { id } = req.params;
        const product = await pool.query("SELECT *  FROM producttable WHERE productid = $1", [id])

        res.json(product.rows[0]);

    } catch (error) {
        console.log(error);
    }
});

//update a product

app.put("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { price } = req.body;
        const productUpdate = await pool.query("UPDATE producttable SET price = $2 WHERE productid  = $1", [id, price])

        res.json("Product Name updated")

    } catch (error) {
        console.log(error);
    }
})

//delete a product

app.delete("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const productDelete = await pool.query("DELETE from productTable WHERE productid = $1", [id]);

        res.json("Product Deleted");

        console.log("Product Deleted");

    } catch (error) {

    }
})

app.listen(5000, () => {
    console.log("Praise be to LORD!");
})