const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.mongo_atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//routers
const trackRoutes = require('./api/routes/tracks');

//logging
app.use(morgan('dev'));
//parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS policy and OPTIONS handling
app.use(cors());

//routing
app.use('/tracks', trackRoutes);

//routing error thrower
app.use((req, res, next) => {
    const error = new Error('Endpoint not available!');
    error.status = 404;
    next(error);
});

//catch all error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;