//Express.js Route
const express = require('express');
const Product = require('./models/Product');

const app = express();

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({}, 'name price');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running');
});
