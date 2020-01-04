const route = require('express').Router();

const {
    JEEMainQ,
    GATEQ,
    NEETQ
} = require('./android');

route.use('/android/jee-main-q', JEEMainQ);

route.use('/android/neet-questions', NEETQ);

route.use('/android/gate-q', GATEQ);

module.exports = route;