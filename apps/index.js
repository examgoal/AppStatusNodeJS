const route = require('express').Router();

const { JEEMainQ, GATEQ }= require('./android');

route.use('/android/jee-main-q', JEEMainQ);

route.use('/android/gate-q', GATEQ);

module.exports = route;

