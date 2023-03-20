/* eslint-disable comma-dangle */
// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
// app setups
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

// stripe modul
const stripe = require('stripe')(process.env.STRIPE_KEY);
// internal imports
const products = require('./routes/products');
const blogs = require('./routes/blogs');
const stripeRoute = require('./routes/stripeRoute');
// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongodb connection established.');
    })
    .catch((err) => {
        console.log(err);
    });

// application routes
app.use('/api/products', products);
app.use('/api/blogs', blogs);
app.use('/api', stripeRoute);

// default routes
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'server running',
    });
});

// stripe
// app.post('/api/checkout', async (req, res) => {
//     console.log(req.body);
//     // format data and send to the server
//     const { items } = req.body;
//     const lineItems = [];
//     items.forEach((item) => {
//         lineItems.push({
//             price: item.id,
//             quantity: items.quantity,
//         });
//     });

//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: `${process.env.APP_DOMAIN}?success=true`,
//         cancel_url: `${process.env.APP_DOMAIN}?canceled=true`,
//     });

//     res.send(
//         JSON.stringify({
//             url: session.url,
//         })
//     );
// });

// error handlers
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});
// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found!',
    });
});

// application run
app.listen(process.env.APPLICATION_PORT || 4000, () => {
    console.log(`Application running on port ${process.env.APPLICATION_PORT}`);
});
