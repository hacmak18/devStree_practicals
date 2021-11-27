// Required modules
const express = require('express');
const app = express();

const TestimonialModel = require('../models/Testimonial');

app.post('/saveTestimonialDetail', async (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send({ success: false, message: 'please fill all fields' }).status(402);
    } else {
        try {
            if (req.body.id) {
                TestimonialModel.updateTestimonialData(req.body, (err, user) => {
                    if (err)
                        res.status(400).send(err);
                    console.log(err, user)
                    res.json({ status: true, message: 'Testimonial updated successfully' });
                });
            } else {
                TestimonialModel.insertTestimonialData(req.body, (err, user) => {
                    if (err)
                        res.status(400).send(err);
                    console.log(err, user)
                    res.json({ status: true, message: 'Testimonial created successfully' });
                });
            }
        } catch (e) {
            console.log(e, 'log');
            res.json({ status: false, message: 'something went wrong' })
        }
    }
});

app.get('/getAllTestimonial', async (req, res) => {
    try {
        TestimonialModel.getAllTestimonial(null, (err, testimonials) => {
            if (err)
                res.status(400).send(err);
            console.log(err, testimonials)
            res.json({ status: true, message: 'Testimonial List', testimonials });
        });
    } catch (e) {
        console.log(e, 'log');
        res.json({ status: false, message: 'something went wrong' })
    }
});

app.delete('/:id', async (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.status(400).json({ status: false, message: 'Invalid Request' });
    } else {
        try {
            TestimonialModel.deleteTestimonial(id, (err, testimonials) => {
                if (err)
                    res.status(400).send(err);
                console.log(err, testimonials)
                res.json({ status: true, message: 'Testimonial Deleted' });
            });
        } catch (e) {
            console.log(e, 'log');
            res.json({ status: false, message: 'something went wrong' })
        }
    }
});

module.exports = app;
