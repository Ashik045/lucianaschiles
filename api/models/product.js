const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        detail: {
            type: Array,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        toprated: {
            type: Boolean,
            default: false,
        },
        sales: {
            type: Number,
        },
        highlights: {
            type: Array,
            required: true,
        },
        pid: {
            type: String,
        },
    },
    { timestamps: true },
);

const ProductModel = mongoose.model('Products', productSchema);

module.exports = ProductModel;
