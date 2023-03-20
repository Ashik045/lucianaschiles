const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        desc: {
            type: Array,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const BlogModel = mongoose.model('Blogs', blogSchema);

module.exports = BlogModel;
