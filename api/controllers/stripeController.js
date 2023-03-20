/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
// internal import
const stripe = require('stripe')(process.env.STRIPE_KEY);

// create a new blog
const createPayment = async (req, res) => {
    // console.log(req.body);
    try {
        // format data and send to the server
        const { items } = req.body;
        const lineItems = [];
        items.forEach((item) => {
            lineItems.push({
                price: item.pid,
                quantity: item.quantity,
            });
        });

        const session = await stripe.checkout.sessions.create({
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 500,
                            currency: 'usd',
                        },
                        display_name: 'Free shipping',
                        // Delivers between 5-7 business days
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 5,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 7,
                            },
                        },
                    },
                },
            ],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.APP_DOMAIN}?success=true`,
            cancel_url: `${process.env.APP_DOMAIN}?canceled=true`,
        });

        res.send(
            JSON.stringify({
                url: session.url,
            })
        );
    } catch (error) {
        res.status(500).send({
            error,
        });
    }
};

module.exports = {
    createPayment,
};
