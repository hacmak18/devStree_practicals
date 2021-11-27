const express = require('express');

const router = express.Router();

const testimonialApi = require('./testimonial');

router.use('/testimonial', testimonialApi);


module.exports = router;
