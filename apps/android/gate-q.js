const route = require('express').Router();

let events = [];

let demoEvent = {
    "event_title": null,
    "event_description": null,
    "event_date": null
};

route.get('/check-system', (req, res, next)=>{
    return res.send({
        maintain: false,
        server_alive: true,
        msg: null
    });
});

route.get('/system-events', (req, res, next)=>{
    return res.send({events: events});
});

module.exports = route;