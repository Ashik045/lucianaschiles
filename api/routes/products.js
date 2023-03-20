const express = require('express');
const {
    createProduct,
    getAllProducts,
    getOneProduct,
} = require('../controllers/productcontroller');

const router = express.Router();

// create a new Product
router.post('/create', createProduct);

// get all Products
router.get('/all', getAllProducts);

// get a Product
router.get('/:id', getOneProduct);

module.exports = router;
