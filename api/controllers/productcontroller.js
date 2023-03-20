// internal imports
const ProductModel = require('../models/product');

// create a new Product
const createProduct = async (req, res) => {
    try {
        const newProduct = await new ProductModel(req.body);

        newProduct.save();

        res.status(200).json({
            message: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to create Product!',
        });
    }
};

// get all Products from database
const getAllProducts = async (req, res) => {
    try {
        const Products = await ProductModel.find();

        res.status(200).json({
            message: Products,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Could not find any post!',
        });
    }
};

// get Product by id
const getOneProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const Product = await ProductModel.findById(id);

        res.status(200).json({
            message: Product,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Could not find any post!',
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
};
