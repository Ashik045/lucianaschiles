const express = require('express');
const { createPayment } = require('../controllers/stripeController');

const router = express.Router();

// create a blog
router.post('/checkout', createPayment);

module.exports = router;
